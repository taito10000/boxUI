
import './App.css';
import StarWars from './components/StarWars';
import Cube from './components/Cube';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';


function App() {
  
  const [rotation, setRotation] = useState(0);

  const changeRotation = (amount) => {
    
    setRotation(rotation+amount);
    
  };
  
  // const update = () => {

  //   console.log("Rotation change");
    
  // };

  // useEffect(update, [rotation]);
  



  return (


    <div>
      <div>
      <Cube rota={rotation} />
     
      </div>
      <div><Footer callback={changeRotation} /></div>
      
    </div>



  );
}

export default App;
