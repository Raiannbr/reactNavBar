import React from 'react'
// import { Card, Image } from 'semantic-ui-react'
// import ItemCount from '../ItemCount/ItemCount'

import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'

// let item = {nombre : "Hamburguesa", plato:"congelado", stock:2}

function ItemListContainer(
    // {nombre, plato, stock, img}
    ) {



    const [items, setItems] = useState([])

    useEffect(() => {
        setTimeout(()=> {
        fetch("./json/Data.json")
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON); setItems(respJSON)})
        .catch(error => console.log('Error: ', error))
    
    },2000)
    }, [])

    
    return (
        <div className="Container">

            <ItemList
                items = {items}
            />


            {/* <Card>
                <Card.Content>
                <Card.Header>{nombre}</Card.Header>
                <Image src={img} wrapped ui={false} width='250px' />
                <Card.Meta>
                    <span className='date'>{plato}</span>
                </Card.Meta>
                <Card.Description>
                    {stock}
                </Card.Description>
                <ItemCount 
                    stock = {stock}
                    initial = {0}
                />

                </Card.Content>
            </Card>             */}
        </div>
    )
}

export default ItemListContainer
