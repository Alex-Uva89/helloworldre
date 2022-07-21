import { useState } from "react";
import '../index.css'
// useState è un Hook

const Input = (value) => {
    /*
    const inputState = useState(); // metodo lungo
    const setInputValue = inputState[1]; // funzione che setta il valore
    const inputValue = inputState[0]; // valore risultato della funzione
    console.log('InputValue: ', inputValue)
    */

    const [inputValue, setInputValue] = useState('');
    const [bgrColor, setbgrColor] = useState('orange');


    const showValue = ( {target: {value}} ) => {
        setInputValue(value)
        console.log(value)
        if( value ){
            setbgrColor(value)
        }
    };

    return (
        <div className="containerInput">
            <input 
                onChange={showValue} 
                placeholder="Inserisci una scritta"
            ></input>
            <div 
                style={{backgroundColor: `${bgrColor}` }}>
                {`stai scrivendo: ${inputValue}`}
            </div>
        </div>
    );
};

export default Input;