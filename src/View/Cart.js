import React  from 'react'
import { CartContext } from '../components/Context/useContext'
import { useContext } from 'react'
import { Segment } from 'semantic-ui-react'

const Cart = () => {

    const { items, addItem } = useContext(CartContext)


    return (
        <div>
            <h2>Carrito de compra</h2>
            <Segment>
            {
                items.map((item)=>( 
                    <div key={item.id}>
                        <h1> {item.name} </h1>
                        <h3> {item.qty} </h3>
                    </div>
                ) )
            }
            </Segment>

        </div>
    )
}

export default Cart
