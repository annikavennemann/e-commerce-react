import styled from 'styled-components/macro'
import { useState } from 'react'

export default function ProductCard({productDetails, changeOrder}) {
    const {id, name, price, description, usability} = productDetails
    
    const [singleItem, setSingleItem] = useState(
        {
            productId: id,
            price: price,
            quantity: 0
        }
    )
   


    function onChange(event) {
        setSingleItem({
            ...singleItem,
            [event.target.name]: event.target.value
        })
        changeOrder(singleItem)
    }

    // function handleClick() {
    //     changeOrder(singleItem)
    // }

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
                    name="quantity"
                    onChange={onChange}
                    value={singleItem.quantity}/>
            </label>
            {/* <button onClick={handleClick}>OK</button> */}
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