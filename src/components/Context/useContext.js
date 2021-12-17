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

    const addItem = (item, qty)=> {
        isInCart(item.id) 
        ? setItems( items.map((itemCart)=>{
            if( itemCart.id === item.id){
                itemCart.qty += qty
            }
            return itemCart
        }))
        :
        setItems([ ...items, { id: item.id, name: item.tittle, price:item.price, qty: qty }])
        console.log(items);
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clearCart = ()=>{
        setItems([])
    }
    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

