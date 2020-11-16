import ProductCard from './ProductCard'
import Button from '../Button'
import {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom";
import saveLocally from '../lib/saveLocally';
import loadLocally from '../lib/loadLocally';


export default function OrderForm({filteredProducts, onSendOrder}) {
    const [orderedItems, setOrderedItems] = useState(loadLocally("orderedItems")??[])
    const history = useHistory();

    useEffect(() => {
        saveLocally("orderedItems", orderedItems)
    },[orderedItems])

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
        onSendOrder()
      }

    function setOrder(singleItem) {
        console.log(singleItem.productId)
        const filter = orderedItems.filter(item => item.productId === singleItem.productId)
        console.log(filter)
        if ( filter.length > 0 ) {
            const index = orderedItems.findIndex(item => item.productId === singleItem.productId)
            const orderedItemToChange = orderedItems[index]
            setOrderedItems(
                [
                    ...orderedItems.slice(0, index),
                    { ...orderedItemToChange, quantity: singleItem.quantity },
                    ...orderedItems.slice(index + 1)
                ]
            )
        } else {
            console.log("Neues Item setzen")
            setOrderedItems(
                [
                    ...orderedItems,
                    singleItem
                ]
            )
        }
        console.log('Order ' + orderedItems.map(item => item))
    }

   
    
}

