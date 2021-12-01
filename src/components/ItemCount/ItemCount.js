import { useState } from 'react';
// import { Button } from 'reactstrap';

function ItemCount({stock, initial}){
    const[qty,setQty] = useState(initial)

    const onIncrease = () => {
        const newValue = qty+1
        if (newValue <= stock){
            setQty(newValue)
        }
    }

    const onDecrease = () => {
        const newValue = qty-1
        if(initial <= newValue){
            setQty(newValue)
        }
    }

    const onAdd = () => {
        const message = `Agregaste ${ qty } producto`
        // console.log(stock)
        if(stock !== 0) {
            (qty === 1) ? alert(message) : alert(message + `s`)
        }
    }

    return(
        <div className= 'containerItemCount'>
            <div className= 'itemCount mt-2 '>
            <button className='btn btn-danger' onClick={ onDecrease } >-</button>{' '}
            <div className='boxQuantity'>{ qty }</div>
            <button className='btn btn-primary'  onClick={ onIncrease } >+</button>{' '}
            </div>
            <button className='btn btn-success' onClick={ onAdd } >Agregar al Carrito</button>
        </div>
    )

}

export default ItemCount