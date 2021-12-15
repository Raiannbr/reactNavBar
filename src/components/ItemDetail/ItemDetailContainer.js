import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

import { Spinner } from 'reactstrap'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const params = useParams()

    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
        fetch("/json/Data.json")
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON); setItem(respJSON.filter(x =>x.id === params.id)); setLoading(false)})
        .catch(error => console.log('Error: ', error))
        

    },2500)
    }, [params.id])

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
                    item = {item[0]}
                />
            }
        </div>
    )
}

export default ItemDetailContainer
