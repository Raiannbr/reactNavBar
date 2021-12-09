import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

import { Spinner } from 'reactstrap'


const ItemDetailContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
        fetch("./json/Data.json")
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON[0]); setItems(respJSON[0]); setLoading(false)})
        .catch(error => console.log('Error: ', error))
    
    },3500)
    }, [])

    return (
        <div>
            {
                loading ? 
                <Spinner color="secondary"
                type="grow">
                Loading...
                </Spinner>
                :
                <ItemDetail
                    items = {items}
                />
            }
        </div>
    )
}

export default ItemDetailContainer
