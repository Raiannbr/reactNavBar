import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'reactstrap';

import { Button, Icon, Segment } from 'semantic-ui-react'


function ItemCount({item, stock, initial, addItem}){
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

    // const onAdd = () => {
    //     const message = `Agregaste ${ qty } producto`
    //     // console.log(stock)
    //     if(stock !== 0) {
    //         (qty === 1) ? alert(message) : alert(message + `s`)
    //     }
    // }

    return(
        <div className= '' >
            <div className= 'itemCount mt-2 '>
                <Segment>
                <Button inverted color='red' onClick={ onDecrease }> -</Button>
                <Button content='Standard' basic>{ qty }</Button>
                <Button inverted color='green' onClick={ onIncrease }>+</Button>
                </Segment>

                <Button animated='vertical' onClick={()=> addItem(item, qty) }>
                <Button.Content hidden onClick= {()=> alert("Se agrego al carrito")} >Carrito</Button.Content>
                <Button.Content visible>
                    <Icon name='shop' />
                </Button.Content>
                </Button>
                    
                <br/>
                 <Link to="/Cart" >   
                 <Button inverted color='green'>
                    ir a pagar
                </Button></Link> 


                {/* <button className='btn btn-danger' onClick={ onDecrease } >-</button>{' '}
                <div className='boxQuantity'>{ qty }</div>
                <button className='btn btn-primary'  onClick={ onIncrease } >+</button>{' '}
                </div>
                <div> */}



            </div>
        </div>
    )

}

export default ItemCount