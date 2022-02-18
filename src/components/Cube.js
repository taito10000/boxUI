

import React, { useEffect } from "react";
import { useState } from 'react';
import './Cube.css';






const Cube = (props) => {


    
    const ACTIVE_TOP = -225;
    const [rot, setRot] = useState(0);
    const [active, setActive] = useState(0);
    



    const bringfront = (el, sideNum) => {
        


        const thecube = document.getElementById('cubecontainer');
        switch (sideNum){
            case 0: thecube.style.setProperty('--sides-bring-transform-from', `translate3d(-400px, -175px, 400px)`);
                thecube.style.setProperty('--sides-bring-transform-to', `translate3d(-450px, ${ACTIVE_TOP}px, 450px)`);
                break;
            case 1: thecube.style.setProperty('--sides-bring-transform-from', `rotateY(90deg) translate3d(-0px,-175px,-0px)`);
                thecube.style.setProperty('--sides-bring-transform-to', `rotateY(90deg) translate3d(-50px,${ACTIVE_TOP}px, 50px)`);
                break;
        
            case 2: thecube.style.setProperty('--sides-bring-transform-from', `rotateY(180deg) translate3d(400px, -175px, 400px)`);
                thecube.style.setProperty('--sides-bring-transform-to', `rotateY(180deg) translate3d(350px, ${ACTIVE_TOP}px, 450px)`);
                break;
        
            case 3: thecube.style.setProperty('--sides-bring-transform-from', `rotateY(-90deg) translate3d(-0px,-175px,800px)`);
                thecube.style.setProperty('--sides-bring-transform-to', `rotateY(-90deg) translate3d(-50px,${ACTIVE_TOP}px,850px)`);
                break;
        
            default: break;
            }


        el.classList.remove('animate-bringfront');
        setTimeout(() => {
            el.classList.add('animate-bringfront');
           
            }, 5);
    };



    const pushback = (el, sideNum) => {
        console.log("PushBack: ", sideNum);
        el.classList.remove('animate-pushback');
        const thecube = document.getElementById('cubecontainer');
        
        switch (sideNum){
            case 0: thecube.style.setProperty('--sides-push-transform-from', `translate3d(-400px, ${ACTIVE_TOP}px, 450px)`);
                thecube.style.setProperty('--sides-push-transform-to', `translate3d(-400px, -175px, 400px)`);
                break;
            case 1: thecube.style.setProperty('--sides-push-transform-from', `rotateY(90deg) translate3d(-50px,${ACTIVE_TOP}px,50px)`);
                thecube.style.setProperty('--sides-push-transform-to', `rotateY(90deg) translate3d(-0px,-175px,-0px)`);
                break;
        
            case 2: thecube.style.setProperty('--sides-push-transform-from', `rotateY(180deg) translate3d(350px, ${ACTIVE_TOP}px, 450px)`);
                thecube.style.setProperty('--sides-push-transform-to', `rotateY(180deg) translate3d(400px, -175px, 400px)`);
                break;
        
            case 3: thecube.style.setProperty('--sides-push-transform-from', `rotateY(-90deg) translate3d(-50px,${ACTIVE_TOP}px,850px)`);
                thecube.style.setProperty('--sides-push-transform-to', `rotateY(-90deg) translate3d(-0px,-175px,800px)`);
                break;
        
            default: break;
        }
        
        
        setTimeout(() => {el.classList.add('animate-pushback')}, 5);

    };

    const rotate = () => {
        
        let previous = 2;
        let facing = 0;
        const thecube = document.getElementById('cubecontainer');
        const sides = Array.from(thecube.children);
        thecube.classList.remove('animate-rotation');
        
       
        const neww = props.rota;
        
        if (props.rota > rot) {
            previous = active;
            facing = active - 1;
            if (facing === -1) {facing = 3};
            setActive(facing);
        };
        if (props.rota < rot) {
            previous = active;
            facing = active +1;
            if (facing === 4){facing=0};
            setActive(facing);
        };

        thecube.style.setProperty('--main-rotateYfrom', `${rot}deg`);
        thecube.style.setProperty('--main-rotateYto', `${neww}deg`);
        setTimeout(() => {
    
            thecube.classList.add('animate-rotation');
            pushback(thecube.children[previous], previous)
            bringfront(thecube.children[facing], facing);
        }, 10);
            
        
        setRot(neww);
        
    };

    useEffect(rotate, [props.rota]);






    const Side1 = (props) => {

        return (
    
            <div className="side1">
    
                Side 1
    
            </div>
        );
    };
    
    const Side2 = () => {

        return (
    
            <div className="side2">
    
                Side 2
    
            </div>
        );
    };
    const Side3 = () => {

        return (
    
            <div className="side3">
    
                Side 3
    
            </div>
        );
    };
    const Side4 = () => {

        return (
    
            <div className="side4">
    
                Side 4
    
            </div>
        );
    };

    const classes = 'container animate-rotation';



    return (
       
       <div className="perspective-container">
         <div id="cubecontainer" className={classes}>

            <Side1 />
            <Side2 />
            <Side3 />
            <Side4 />

         </div>
        </div>
       
    );
};



export default Cube;