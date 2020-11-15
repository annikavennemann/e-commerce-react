import React from 'react'
import ProductCard from './ProductCard'
import Button from '../Button'
import {useState} from 'react'


export default function OrderForm({filteredProducts}) {
    const [orderedItems, setOrderedItems] = useState([])
    return (
        <form onSubmit={sendOrder}>
            {filteredProducts.map(product => <ProductCard changeOrder={setOrder} key={product.id} productDetails={product}></ProductCard>
                
                )}
            <Button text={"zur Bestellung"}/>
        </form>
    )

    function sendOrder(event) {
        event.preventDefault()
      }

    function setOrder(item) {
        console.log(item)
        setOrderedItems(
            [
                ...orderedItems,
                item
            ]
        )
        console.log(orderedItems)
    }
}

