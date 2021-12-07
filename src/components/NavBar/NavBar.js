import React from "react"
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

function NavBar () {
    return ( 
            <>
                {/* <nav className="navbar"> */}
                    <div className="container">
                        <div className='navBar'>

                            <h2 className="logo"><a href='https://www.instagram.com/laalianzareverde'>Instagram</a></h2>
                        

                            <ul>
                                <li><NavLink className='aL' to='/' activeClassName='active' >home</NavLink></li>
                                <li><NavLink className='aL' to='/Item' activeClassName='active' >Detalle</NavLink></li>
                                <li><NavLink className='aL' to='/Contacto' activeClassName='active' >Contacto</NavLink></li>
                            </ul>




                            {/* <div className="CartW">        
                            <CartWidget/>
                            </div> */}
                        </div>
                        
                    </div>
                    
                            {/* <NavLink to='/' > <h2> Home </h2></NavLink>
                            
                            <NavLink to='/Item' ><h2> Detalle </h2></NavLink>
                     */}
                    {/* <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

                            
                        </button>
                    </div> */}
                {/* </nav> */}
            </>  
    )
}
export default NavBar


