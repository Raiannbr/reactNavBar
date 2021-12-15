import React from 'react'
import { createContext } from 'react'

import { useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({children}) => {

    const [items, setItems] = useState([])

    const isInCart = (id)=> {
        const found = items.find(item=> item.id === id )
        return found;
    }


    //https://youtu.be/2NUT0eFVn04?t=901

    const addItem = (item, qty)=> {
        isInCart(item.id) 
        ? setItems( items.map((itemCart)=>{
            if( itemCart.id === item.id){
                itemCart.qty += item.qty
            }
        }))
        :
        setItems([ ...items, { id: item.id, name: item.tittle, price:item.price, qty: qty }])
        console.log(items);
    }

    return (
        <CartContext.Provider value={{ items, addItem }}>
            {children}
        </CartContext.Provider>
    )
}

