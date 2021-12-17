import React  from 'react'
import { CartContext } from '../components/Context/useContext'
import { useContext } from 'react'
import { Segment, Card, Image, Button } from 'semantic-ui-react'


const Cart = () => {

    const { items, removeItem, clearCart } = useContext(CartContext)


    return (
        <div className='CartContainer'>
            
            <h2>Carrito de compra</h2>
            {/* <Segment.Group horizontal > */}

            {
                items.map((item)=>( 
                    <Card key={item.id}>
                        <Image  />
                        <Card.Content>
                        <Card.Header>{item.name}</Card.Header>
                        <Card.Meta>{item.qty}</Card.Meta>
                        <Card.Meta>{item.price * item.qty}</Card.Meta>

                        <Card.Description>
                            {/* Daniel is a comedian living in Nashville. */}
                        </Card.Description>
                        <Button onClick={()=> removeItem(item.id)}>Eliminar</Button>
                        </Card.Content>
                        
                    </Card>
                    
                    // <div key={item.id}>
                    //     <Segment.Group horizontal>
                    //         <Segment>Producto</Segment>
                    //         <Segment>{item.name}</Segment>
                    //         {/* <Segment>Right</Segment> */}
                    //     </Segment.Group>
                    //     <Segment.Group horizontal>
                    //         <Segment>Cantidad</Segment>
                    //         <Segment>{item.qty}</Segment>
                    //         {/* <Segment>Right</Segment> */}
                    //     </Segment.Group>
                    // </div>
                    // <div key={item.id}>
                    //     <h1> {item.name} </h1>
                    //     <h3> {item.qty} </h3>
                    // </div>
                ) )
            }
            {}
            {<Button onClick={()=> clearCart()}>Limpiar carrito</Button>}

        </div>
    )
}

export default Cart
