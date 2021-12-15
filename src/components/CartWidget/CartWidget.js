import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/useContext'
// import { Icon } from 'semantic-ui-react'

function CartWidget() {

    const {items} = useContext(CartContext)
    let itemsInCart = 0

    items.map((item) => {
        itemsInCart = itemsInCart + item.qty;
    })

    return (

        <>
            <div className='itemsInCart'>
                {itemsInCart}
            </div>

            <Link to="/Cart">
            <img src='https://image.flaticon.com/icons/png/512/107/107831.png' width='95%' alt="carrito"/>
            </Link>
        </>
    )
}

export default CartWidget
