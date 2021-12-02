import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({items}) => {
    return (
        <div >
            <Card>
                <Card.Content>
                <Card.Header>{items.nombre}</Card.Header>
                <Image src={items.img} wrapped ui={false} width='250px' />
                <Card.Meta>
                    <span className='date'>{items.plato}</span>
                </Card.Meta>
                <Card.Description>
                    stock {items.stock} unidades
                </Card.Description>
                <ItemCount 
                    stock = {items.stock}
                    initial = {0}
                />
                </Card.Content>
            </Card>     
            
        </div>
    )
}

export default ItemDetail
