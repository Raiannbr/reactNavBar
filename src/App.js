import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './components/Router/Router';
import { CartProvider } from './components/Context/useContext';

//fire base
// import { db } from './Firebase/firebaseConfig';

// import NavBar from './components/NavBar/NavBar';
// import Header from './components/Header/Header';
// import User from './components/User/User';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import Home  from './View/Home';
// import Contact from './View/Contact';
// import Category from './View/Category';
// import Cart from './View/Cart';

//ej para borrar de metodos de rending
// import Metodos from './components/Context/Metodos';



function App() {

  return (
    <div className="App">

      <CartProvider>
        <Router/>
      </CartProvider>
         

      {/* <div className="ItemListContainer" >
        <ItemListContainer
          
        />
      </div> */}
      {/* <div className="row row-cols-sm-1" >
        <div className="col d-flex">
          <ItemDetailContainer
      
          />
        </div>
      </div> */}
      
    </div>
  );
}

export default App;




//ejemplo de card de users
/* <User
name='Braian Silva'
date='2021'
description='Estudiante' 
img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
/>
<User
name='Arián'
date='2021'
description='Tutor' 
img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
/> */