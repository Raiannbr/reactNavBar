import React from "react"
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

function NavBar () {
    return ( 
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        
                        <h2 className="active"><a href='https://www.instagram.com/laalianzareverde'>Instagram</a></h2>
                        
                    </div>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="CartW">
                        
                    <CartWidget/>
                        
                    </div>
                </nav>
            </div>  
    )
}
export default NavBar


