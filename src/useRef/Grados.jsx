import { useRef } from "react";

const Grados = () => {
    const celciusRef = useRef();
    const farenheitRef = useRef();


    const calculate = () => {
        const celcius = celciusRef.current.value; 
        const farenheit = celcius * 9 / 5 + 32;
        farenheitRef.current.innerHTML =  `${celcius} grados Celsius son ${farenheit} grados Fahrenheit.`
    }


    return ( 
    <div>
        <input type="text" ref={ celciusRef }></input>
        <button onClick={calculate}>Calcular</button>
        <p ref={ farenheitRef }></p>
    </div>

    )
}

export default Grados
