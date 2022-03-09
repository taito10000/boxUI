
import './App.css';
//import StarWars from './components/StarWars';
import Cube from './components/Cube';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Page1 from './pages/Page1';

function App() {
  
  const [rotation, setRotation] = useState(0);
  const [activecube, setActivecube] = useState(0);
  let scrollTimer = undefined;
  


  const changeRotation = (amount) => {
    
    setRotation(rotation+amount);
    
  };

  
  const scrollEnd = () => {

    const loc = document.documentElement.scrollTop;
    let selection = null;
    if (loc < 500) {selection = 0};
    if (loc > 500) {selection = 1};
    if (loc > 1000) {selection = 2};
    
   
    if (activecube !== selection) {
       
        setRotation(0);
    };
    
    setActivecube(selection);

  };



  const handleScrollEvent = () => {
    if (scrollTimer !== undefined) {clearTimeout(scrollTimer);
      scrollTimer = undefined;};
      scrollTimer = setTimeout(scrollEnd, 150);
     

  };
  useEffect(() => {

    setRotation(rotation);

  }, [activecube]);

  useEffect(() => {
         window.addEventListener('scroll', handleScrollEvent);
        
        return () => {window.removeEventListener('scroll', handleScrollEvent)}
      
    }, []);
  



     

  return (


    <div id="top">
      <div>
        <Cube rota={rotation} cubeid={0} active={activecube} page1={Page1}/>
        <Cube rota={rotation} cubeid={1} active={activecube}/>
        <Cube rota={rotation} cubeid={2} active={activecube}/>
        
      </div>
      <div><Footer callback={changeRotation} /></div>
      
    </div>



  );
}

export default App;
