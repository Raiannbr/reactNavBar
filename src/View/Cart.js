import React  from 'react'
import { CartContext } from '../components/Context/useContext'
import { useContext } from 'react'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { items, removeItem, clearCart } = useContext(CartContext)

    const itemCart = items.map((item)=>( 
        <Card key={item.id}>
            <Card.Content>
            <Card.Header>{item.name}</Card.Header>
            <Card.Meta>Cantidad {item.qty}</Card.Meta>
            <Card.Meta>Total producto $ {item.price * item.qty}</Card.Meta>
            <Card.Description>
            </Card.Description>
            <Button inverted color='red' onClick={()=> removeItem(item.id)}>Eliminar</Button>
            </Card.Content>
            
        </Card>
    ) )


    return (
        <div className='CartContainer'>
            
            <h2>Carrito de compra</h2>

            
                {
                   itemCart
                }
                
                

                <div> 
                    
                    <Link to={"/Ckeckout"}> <Button inverted color='green'>Finalizar Compra</Button></Link>
                    <Button inverted color='red' onClick={()=> clearCart()}>Limpiar carrito</Button>

                </div>

        </div>
    )
}

export default Cart
