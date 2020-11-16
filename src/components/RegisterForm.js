import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Button from "../Button";


export default function RegisterForm({ onSubmit, savedItems }) {
    const [userProfile, setUserProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    

    function handleSubmit(event) {
        event.preventDefault()
        onSubmit(userProfile)
        alert("Congrats! Your Booster is on your Way. Happy Hacking!")
    }

    function onChange(event) {
        setUserProfile({
            ...userProfile,
            [event.target.name]: event.target.value
        })
    }
    
    return (
        <>
        <Order>
            <h2>Your Order</h2>
            <ul>
            {savedItems.map(item => <li>{item.name}, Anzahl: {item.quantity}</li>)}
            </ul>
        </Order>
        <Form action="/create-user" method="POST" onSubmit={handleSubmit}>
            <h2>Customer data</h2>
                <div>
                <label htmlFor="firstName">
                    First name
                </label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Your first name ..."
                    onChange={onChange}
                    value={userProfile.firstName}
                />
                </div>

                <div>
                <label htmlFor="lastName">
                    Last name
                </label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Your last name ..."
                    onChange={onChange}
                    value={userProfile.lastName}
                />
                </div>

                <div>
                    <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        placeholder="Your e-mail address ..."
                        onChange={onChange}
                        value={userProfile.email}
                    />
                    </label>
                </div>

                <div>
                <label htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={userProfile.password}
                />
                </div>


            <div>
                <Button>&#128640; order</Button>
            </div>
        </Form>
        </>
    )
}

const Order = styled.div`
    display: grid;
    gap: 1.25rem;
    width: 80%;
    box-shadow: 0 2px 11px 0 rgba(25, 50, 81, 0.2);
    background-color: #292929;
    border-radius: 5px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
    padding: 1em;
    margin: 1.5em auto;
    color: white;

    h2 {
        text-align: center;
        text-transform: uppercase;
    }
`


const Form = styled.form`
    display: grid;
    gap: 1.25rem;
    width: 80%;
    box-shadow: 0 2px 11px 0 rgba(25, 50, 81, 0.2);
    background-color: #292929;
    border-radius: 5px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
    padding: 1em;
    margin: 1.5em auto;
    color: white;

    h2 {
        text-align: center;
        text-transform: uppercase;
    }

    label {
        font-weight: 300;
        margin: 1.5em 0;
    }

    input[type='text'],
    input[type='email'],
    input[type='password'] {
    display: block;
    width: 100%;
    margin: 0.5em 0;
    font-size: 0.8em;
  }
    
`