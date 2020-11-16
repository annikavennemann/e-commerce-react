import React from 'react'
import {useState} from 'react'
import OrderForm from './OrderForm'


export default function Filter({products, onSendOrder}) {
    const[filteredProducts, setFilteredProducts] = useState([])
    const filter = [...new Set(products.map(product => product.usability))]
    //const [formValue, setFormValue] = useState()


    return (
        <div>
            <h2>Choose to use:</h2>
            {filter.map((element, index) => (
                <label htmlFor={element}>
                    <input type="radio" id={element} name="usability" value={element} onChange={handleChange}/>
                    {element}
                </label>
            ))}
            <OrderForm filteredProducts={filteredProducts} onSendOrder={onSendOrder}/>
        </div>
        
    )

    function handleChange(event){
        setFilteredProducts(products.filter(product => product.usability === event.target.value))
    }
}