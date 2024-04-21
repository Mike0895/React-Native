import { useRef } from "react";

const Dollars = () => {
    const eurosRef = useRef();
    const dollarsRef = useRef();


    const calculate = () => {
        const euros = eurosRef.current.value; 
        dollarsRef.current.innerHTML = euros * 2; 
    }


    return ( 
    <div>
        <input type="text" ref={ eurosRef }></input>
        <button onClick={calculate}>Calcular</button>
        <p ref={ dollarsRef }></p>
    </div>

    )
}

export default Dollars; 

