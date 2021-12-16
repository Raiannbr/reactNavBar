import React from 'react'
import Item from "./Item"
// import { useEffect } from 'react';

const ItemList = ({item}) => {

    //mapeo del array guardado en la variable products para pasar en la lista
    let products = item.map( (item)=> 
                <div key={item.id} >
                    <Item
                        item = {item}
                    />
                </div>
    )
    return (
        <div className= "itemsList">
            { products }
        </div>
    )
    
}

export default ItemList
