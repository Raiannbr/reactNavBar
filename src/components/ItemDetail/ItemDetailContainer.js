import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'


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
    
    },5000)
    }, [])

    


    return (
        <div>
            {
                loading ? <h4>Cargando detalle</h4>
                :
                <ItemDetail
                    items = {items}
                />
            }
        </div>
    )
}

export default ItemDetailContainer
