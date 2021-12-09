import React from 'react'
// import { Card, Image } from 'semantic-ui-react'
// import ItemCount from '../ItemCount/ItemCount'

import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'

import {Spinner} from 'reactstrap'


function ItemListContainer({categoryId} ) {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
        fetch(`./json/Data.json`)
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON); setItems(respJSON); setLoading(false)})
        .catch(error => console.log('Error: ', error))
    
    },2000)
    }, [categoryId])


    return (
        <div className="Container">
            {
                loading ? 
                <Spinner color="success"
                type="grow">
                Loading...
                </Spinner>
                :
                <ItemList
                items = {items}
            />
            }
        </div>
    )
}

export default ItemListContainer
