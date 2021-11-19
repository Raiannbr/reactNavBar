import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
// import User from './components/User/User';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">

      <NavBar/>
      
      <Header title="La Alianza Reverde" 
                subtitle="Comida Vegana"
                color='green' />
      
      <div className="ItemListContainer" >
      <ItemListContainer 
        nombre = 'Hamburguesa'
        plato = 'Congelado'
        stock = '2'
      />
      </div>


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