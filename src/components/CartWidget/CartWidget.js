import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/useContext'
import { Label } from 'semantic-ui-react'
// import { Icon } from 'semantic-ui-react'

function CartWidget() {

    const {items} = useContext(CartContext)
    let itemsInCart = 0

    items.map((item) => {
        return(

            itemsInCart = itemsInCart + item.qty
        )
    })
    

    return (

        <div className="CartW">
            {/* <div className='itemsInCart'>
                
            </div> */}
            <Label circular color='green'>
            {itemsInCart}
            </Label>

            <Link to="/Cart">
            
            <img src='https://image.flaticon.com/icons/png/512/107/107831.png' width='60%' alt="carrito"/>
            
            </Link>
        </div>
    )
}

export default CartWidget
