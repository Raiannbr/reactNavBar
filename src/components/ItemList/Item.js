import React from 'react'

import { Card, Image } from 'semantic-ui-react'

//componente contador
import ItemCount from '../ItemCount/ItemCount'



function Item({nombre, img, plato, stock, id}) {
    return (
        <div >
            <Card>
                <Card.Content>
                <Card.Header>{nombre}</Card.Header>
                <Image src={img} wrapped ui={false} width='250px' />
                <Card.Meta>
                    <span className='date'>{plato}</span>
                </Card.Meta>
                <Card.Description>
                    stock {stock} unidades
                </Card.Description>
                <ItemCount 
                    stock = {stock}
                    initial = {0}
                />
                </Card.Content>
            </Card>     
            
        </div>
    )
}

export default Item
