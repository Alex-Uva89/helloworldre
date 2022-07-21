import { useState } from "react";
import '../index.css'
//  il contatore non può scendere sotto lo zero

const Counter = ({ countInit }) => {
    //Inizializzo i valori del contatore countInit usato per passare un valore
    const [count, setCount] = useState(countInit);

    //logiche per incrementare, decrementare e resettare il contatore
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    const handleReset = () => setCount(countInit);

    return (
        <div className="counter">
            <div className="boxButton">
                <button onClick={handleDecrement}>➖</button>
                <h2 className="h1">{count}</h2>
                <button onClick={handleIncrement}>➕</button>
            </div>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
    


    // return (
    //     <div className="counter">
    //         <button onClick={handleIncrement}>+</button>
    //         <h2 className="h1">{count}</h2>
    //         <button onClick={handleDecrement}>-</button>
    //     </div>
    // );
}

export default Counter;