import React from 'react'

import { Card, Image } from 'semantic-ui-react'


//componente contador
// import ItemCount from '../ItemCount/ItemCount'



function Item({items}) {
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
                <button className='btn btn-success'>Ver detalle</button>
                </Card.Content>
            </Card>     
            
        </div>
    )
}

export default Item
