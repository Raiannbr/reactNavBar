import React  from 'react'
import { CartContext } from '../components/Context/useContext'
import { useContext } from 'react'
import { Segment, Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { items, removeItem, clearCart } = useContext(CartContext)


    return (
        <div className='CartContainer'>
            
            <h2>Carrito de compra</h2>
            {/* <Segment.Group horizontal > */}

            {
                items.map((item)=>( 
                    <Card key={item.id}>
                        <Card.Content>
                        <Card.Header>{item.name}</Card.Header>
                        <Card.Meta>{item.qty}</Card.Meta>
                        <Card.Meta>$ {item.price * item.qty}</Card.Meta>
                        <Card.Description>
                        </Card.Description>
                        <Button inverted color='red' onClick={()=> removeItem(item.id)}>Eliminar</Button>
                        </Card.Content>
                        
                    </Card>
                ) )
            }
            { 
                <Link to={"/Ckeckout"}> <Button inverted color='green'>Finalizar Compra</Button></Link>
            }
            <br/><br/>

            {<Button inverted color='red' onClick={()=> clearCart()}>Limpiar carrito</Button>}

        </div>
    )
}

export default Cart
