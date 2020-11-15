import React from 'react'
import ProductCard from './ProductCard'
import Button from '../Button'
import {useState} from 'react'
import {useHistory} from "react-router-dom";


export default function OrderForm({filteredProducts, onSendOrder}) {
    const [orderedItems, setOrderedItems] = useState([])
    const history = useHistory();

    return (
        <form onSubmit={sendOrder}>
            {filteredProducts.map(product => <ProductCard changeOrder={setOrder} key={product.id} productDetails={product}></ProductCard>
                
                )}
            <Button text={"zur Bestellung"}/>
        </form>
    )

    function sendOrder(event) {
        event.preventDefault()
        history.push("/order")
        onSendOrder(orderedItems)
      }

    function setOrder(singleItem) {
        setOrderedItems(
            [
                ...orderedItems,
                singleItem
            ]
        )

    //Test: if function, um doppelte Angabe von Produkten zu verhindern
        // orderedItems.forEach((item, index)=> {
        //     if(item.productId === singleItem.productId) {
        //         setOrderedItems(
        //             [orderedItems[index]]: singleItem
        //         )
        //     } else {
        //         setOrderedItems(
        //             [
        //                 ...orderedItems,
        //                 singleItem
        //             ]
        //         )
        //     }

        // })
    }
}

