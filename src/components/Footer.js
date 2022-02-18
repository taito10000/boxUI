import "./Footer.css";




const Footer = (props) => {


    const logger = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log("MITAT: w:", width," h:", height);


    };
    
    

    const btnClickHandler = (e) => {

        if (e.target.name === 'fwd'){
            props.callback(-90);
        }
        if (e.target.name === 'rew') {
            props.callback(90);
        }


        

    };


    return (

        <div className="cont">

            <button name="rew" onClick={btnClickHandler}>rew</button>
            <button name="fwd" onClick={btnClickHandler}>fwd</button>
            <p>Tämän ei millään pitäis kääntyä...</p>

        </div>
    );



};

export default Footer;