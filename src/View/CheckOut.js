import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


const CheckOut = () => {
    return (
        <div className='wrap'>
            <form action='' className='formulario'>
                <div className='checkbox'>
                    <p >Nombre:</p>
                    <input type="text" className='field' ></input>
                    <p >Correo</p>
                    <input type="text" className='field' ></input>
                    <p >Contraseña</p>
                    <input type="text" className='field' ></input>
                    <p >Repetir contraseña</p>
                    <input type="text" className='field' ></input>
                </div>
                <div className='radio'>
                    <h2>¿Con que desea abonar?</h2>
                    <input type='radio' name='pago' id='efectivo'></input>
                    <label for='efectivo'>Efectivo</label>
                    <input type='radio' name='pago' id='tarjeta'></input>
                    <label for='tarjeta'>Tarjeta</label> <br/>
                    <Link to='/Confirmado'>
                        <button className='buttonSend'>Enviar</button>
                    </Link>
                </div>

            </form>
        
        </div>
    )
}

export default CheckOut
