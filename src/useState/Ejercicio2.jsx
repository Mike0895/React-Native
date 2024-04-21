import { useRef } from 'react';
import { useState } from 'react';

const Ejercicio2 = () => {
    const eurosRef = useRef();
    const [inputDollars, setDollars] = useState();


    const calculate = () => (
        setDollars(eurosRef.current.value * 2) )


    return ( 
    <div>
        <input type="text" ref={eurosRef}></input>
        <button onClick={calculate}>Calcular</button>
        <p>{ inputDollars }</p>
    </div>

    );
}

export default Ejercicio2;
