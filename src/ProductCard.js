import styled from 'styled-components/macro'
import { useState } from 'react'

export default function ProductCard({productDetails}) {
    const {name, price, description, usability} = productDetails


    const [productOrder, setProductOrder] = useState({
        productName: name,
        numberOfItems: ''
    });

    function onChange(event) {
        setProductOrder({
            ...productOrder,
            [event.target.name]: event.target.value
        })
    }

    return <CardWrapper>
            <h2>{name}</h2>
            <p>€ {price}</p>
            <p>{description}</p>
            <p>{usability}</p>
            <label>Anzahl: 
                <input 
                    type="number" 
                    min="0" 
                    max="10" 
                    name="numberOfItems"
                    onChange={onChange}
                    value={productOrder.numberOfItems}/>
            </label>
        </CardWrapper>

}


const CardWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr ;
    gap: 20px;
    padding: 15px;
    text-align: center;
    background-color: #242424;
    border-radius: 10px;
    opacity: 0.9;

    input {
        font-size: inherit;
        padding: 2px;
        border-color: limegreen;
        border-radius: 5px;
        background-color: #242424;
        color: limegreen;
        width: 35px;
        text-align: center;
        margin-left: 5px;
        -webkit-appearance: none;
        -moz-appearance: textfield;
    }

`