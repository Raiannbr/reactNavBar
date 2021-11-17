import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import User from './components/User/User';

function App() {
  return (
    <div className="App">

      <NavBar/>
      
      <Header title="La Alianza Reverde" 
                subtitle="Comida Vegana"
                color='green' />
      
      <div className="userCss">
      <User
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
      />
      </div>


      {/* <NavBar/> */}

    </div>
  );
}

export default App;
