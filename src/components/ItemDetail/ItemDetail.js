import React, {useState } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { CartContext } from '../Context/useContext'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'



const ItemDetail = ({item}) => {

    const [add, setAdd] = useState(false)

    const {addItem} = useContext(CartContext)
    return (
        <div className='ItemDetail'>
            <div className='CardDetail'>
            <Card >
                <Card.Content>
                <Card.Header>{item.tittle}</Card.Header>
                <Image src={item.img} wrapped ui={false} width='250px' />
                <Card.Meta>
                    <span className='date'>{item.category}</span>
                </Card.Meta>
                <Card.Description>
                    stock {item.stock} unidades
                </Card.Description>
                {
                    add ? 
                    <div>Añadido!</div>
                    :
                    <ItemCount 
                    item = {item}
                    stock = {item.stock}
                    initial = {1}
                    addItem={addItem}
                />}
                </Card.Content>
            </Card>     
            </div>
        </div>
    )
}

export default ItemDetail
