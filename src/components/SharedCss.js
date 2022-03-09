import React, { useEffect, useState } from 'react';
import './SharedCss.css';





const SharedCss = (props) => {

    const [num, setNum] = useState(0);
    const [degrs, setDegrs] = useState(45);
    const [old, setOld] = useState(0);
    
    
    const rotateChildren = () => {

        const els = document.querySelectorAll('.sub-container');
        els.forEach(el => {
            let rnd = Math.random()*360;
            const rotation = `

                transform: rotateZ(${rnd}deg);
                transition: transform 2s;
        
                `
            setTimeout(() => {
                
                
                setDegrs(rnd);
                el.style.cssText = rotation;
            }, 54);

         }
        );

    };


    

    

    // const rotate = (el) => {

        
        
    //     el.style.cssText = rotation;
       
       
    // };




    useEffect(rotateChildren, [props.change])




    return (

        <div className='container'>
            <div className='sub-container'>
                <div className='element'>
                    
s
                </div>
            </div>

        </div>


    );

};


export default SharedCss;