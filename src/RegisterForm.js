import React from 'react'
import { useState } from 'react'

export default function RegisterForm({ onSubmit }) {
    const [userProfile, setUserProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    function handleSubmit(event) {
        event.preventDefault()
        onSubmit(userProfile)
        alert("Congrats! You are registered.")
    }

    function onChange(event) {
        setUserProfile({
            ...userProfile,
            [event.target.name]: event.target.value
        })
    }
    
    return (
        <form action="/create-user" method="POST" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div>
            <label htmlFor="firstName">
                <strong>First name</strong>
            </label>
            <input
                type="text"
                name="firstName"
                onChange={onChange}
                value={userProfile.firstName}
            />
            </div>

            <div>
            <label htmlFor="lastName">
                <strong>Last name</strong>
            </label>
            <input
                type="text"
                name="lastName"
                onChange={onChange}
                value={userProfile.lastName}
            />
            </div>

            <div>
                <label>
                <strong>Email</strong>
                <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={userProfile.email}
                />
                </label>
            </div>

            <div>
            <label htmlFor="password">
                <strong>Password</strong>
            </label>
            <input
                type="password"
                name="password"
                onChange={onChange}
                value={userProfile.password}
            />
            </div>


            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    )
}
