import { useRef } from 'react';
import { useState } from 'react';

const Ejercicio3 = () => {
    const celciusRef = useRef();
    const [inputFarenheit, setFarenheit] = useState();


    const calculate = () => (
        setFarenheit(celciusRef.current.value * 9 / 5 + 32) )


    return ( 
    <div>
        <input type="text" ref={celciusRef}></input>
        <button onClick={calculate}>Calcular</button>
        <p>{ inputFarenheit }</p>
    </div>

    );
}


export default Ejercicio3
