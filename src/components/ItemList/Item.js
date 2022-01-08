import React from 'react'
import { Link } from 'react-router-dom'

import { Card, Image, Segment, Button } from 'semantic-ui-react'


//componente contador
// import ItemCount from '../ItemCount/ItemCount'



function Item({item}) {
    console.log(item);
    return (
        <div className='product'>
            <Link to={`/item/${item.id}`}>
            <Card>
                <Card.Content>
                <Card.Header>{item.tittle}</Card.Header>
                
                <Image src={item.img} wrapped ui={false} width='150px' height='150px' />
                <Card.Meta>
                    <span className='date'>{item.category}</span>
                </Card.Meta>
                <Card.Description>
                    stock {item.stock} unidades
                </Card.Description>
                <Segment>
                <Link to={`/item/${item.id}`}>
                    <Button inverted color='green'>Ver detalle</Button>
                    {/* <button className='btn btn-success'>Ver detalle</button> */}
                </Link>
                </Segment>
                </Card.Content>
            </Card>     
            </Link>
        </div>
    )
}

export default Item
