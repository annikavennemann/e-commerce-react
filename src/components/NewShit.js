import React from 'react'
import {useState} from 'react'

export default function NewShit() {
    const [product, setProduct] = useState({
        name: '',
        price: null,
        description: '',
        usability: '' 
    })

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
                <input 
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name ..."
                    onChange={handleChange}
                    value={product.name}
                />
            </label>
            <label htmlFor="price">
                Preis:
                <input 
                    id="price"
                    type="number"
                    name="price"
                    onChange={handleChange}
                    value={product.price}/>
            </label>
            <label htmlFor="description">
                Beschreibung:
                <input 
                    id="description"
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={product.description}
                />
            </label>
            <label htmlFor="before-php">
                <input type="radio" id="before-php" name="usability" value="before php" onChange={handleChange}/>
                before php
            </label>
            <label htmlFor="after-php">
                <input type="radio" id="after-php" name="usability" value="after php" onChange={handleChange}/>
                after php
            </label>

            <button>Produkt anlegen</button>

        </form>
    )

    function handleChange(event) {
        setProduct(
            {
                ...product,
                [event.target.name]: event.target.value
            }
        )
    }

    function handleSubmit(event) {

        event.preventDefault()
        
        console.log(product)
    
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const copy = Object.assign({}, product);
        copy.price = parseInt(copy.price)

        
        var raw = JSON.stringify(copy);
        
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://php-booster.local/products", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
}
