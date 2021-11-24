import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'

// let item = {nombre : "Hamburguesa", plato:"congelado", stock:2}

function ItemListContainer({nombre, plato, stock, img}) {


    
    return (
        <div className="Container">


            <Card>
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
            </Card>            
        </div>
    )
}

export default ItemListContainer
