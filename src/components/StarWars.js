

import './StarWars.css';
import text from '../assets/content.txt';
import { useEffect, useState } from 'react';

const StarWars = () => {

    const [txtContent, setTxtContent] = useState([]);
   
    function pageScroll() {
       // window.scrollBy(0,1);
        window.scrollBy({
            top: 3,
            left: 0,
            behavior: 'smooth'

        });
        
        const scrolldelay = setTimeout(pageScroll,10);
    }
   
   
    const reader = async () => {

       const data = await fetch(text);
        const txt = await data.text();
        const splitted = txt.split('\n\n');
        const final = [];
        splitted.forEach((kpl, i) => {
            final.push(<p key={i}>{kpl}</p>);

        });
        setTxtContent(final);

   };

    useEffect(reader, []);


    return (
        <div>   
            <button onClick={pageScroll}>scroll</button>
            <div className='starContainer'>
             
             <div className='txtcontainer'>
                <span>{txtContent}</span>
            
            </div>
            </div>
        </div>



    )


};

export default StarWars;