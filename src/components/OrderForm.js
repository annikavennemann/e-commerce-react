import React from 'react'
import ProductCard from './ProductCard'
import Button from '../Button'


export default function OrderForm({filteredProducts}) {
    return (
        <form>
            {filteredProducts.map(product => <ProductCard key={product.id} productDetails={product}></ProductCard>
                
                )}
            <Button text={"zur Bestellung"} onSubmit={sendOrder}/>
        </form>
    )

    function sendOrder(event) {
        event.preventDefault()
      }
}

