import React from 'react'
// import { Card, Image } from 'semantic-ui-react'
// import ItemCount from '../ItemCount/ItemCount'

import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'


function ItemListContainer() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
        fetch("./json/Data.json")
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON); setItems(respJSON); setLoading(false)})
        .catch(error => console.log('Error: ', error))
    
    },2000)
    }, [])


    return (
        <div className="Container">
            {
                loading ? <h4>Cargando lista de productos</h4>
                :
                <ItemList
                items = {items}
            />
            }
        </div>
    )
}

export default ItemListContainer
