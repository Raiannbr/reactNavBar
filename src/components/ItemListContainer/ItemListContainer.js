import React from 'react'
// import { Card, Image } from 'semantic-ui-react'
// import ItemCount from '../ItemCount/ItemCount'

import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
// import ItemListLoader from '../ItemList/ItemListLoader'

import {Spinner} from 'reactstrap'


function ItemListContainer({categoryId} ) {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        
        setLoading(true)
        setTimeout(()=> {
        fetch(`./json/Data.json`)
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON); setItem(respJSON); setLoading(false)})
        .catch(error => console.log('Error: ', error))
    
       
    },2000)
    }, [categoryId])

    return (
        <div className="Container">            
            {
                loading ?
                // <ItemListLoader/> 
                <Spinner color="success"
                type="grow">
                Loading...
                </Spinner>
                :
                <ItemList
                item = {item}
                />
            }
        </div>
    )
}

export default ItemListContainer
