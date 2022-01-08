import React from 'react'

import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer';


// import NavBar from './components/NavBar/NavBar';
// import Header from './components/Header/Header';
// // import User from './components/User/User';
// // import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home  from '../../View/Home';
import Contact from '../../View/Contact';
import Category from '../../View/Category';
import Cart from '../../View/Cart';
import CheckOut from '../../View/CheckOut';
import CheckFinal from '../../View/CheckFinal';


const Router = () => {
    
    return (
        <div>
            <div className="App">
                <BrowserRouter>
                    <NavBar/>
                    <Header title="La Alianza Reverde" 
                            subtitle="Comida Vegana"
                            color='green' />
                        <br/>
                        <Routes>
                        <Route path = '/' element={<Home/>} ></Route>
                        <Route path = {'/category/:categoryId/'} element={<Category/>} ></Route>
                        <Route path = {'/Cart'} element={<Cart/>} ></Route>
                        <Route path = {'/item/:id'} element={<ItemDetailContainer/>} ></Route>
                        <Route path = '/Contacto/' element={<Contact/>} ></Route>
                        <Route path = '/Ckeckout/' element={<CheckOut/>} ></Route>
                        <Route path = '/Confirmado/' element={<CheckFinal/>} ></Route>
                        </Routes> 
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Router
