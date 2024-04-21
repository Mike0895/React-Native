import { useState } from "react";

const ValorBoton = () => {
    const [inputText, setInputText] = useState('');
    const [valorAMostrar, setValorAMostrar] = useState(0);

    return (
        <div>
            <input type="text" onChange={e=> setInputText(e.target.value)} />
            <button onClick={() => setValorAMostrar(inputText)}>Cambiar valor</button>
            <div>{valorAMostrar}</div>
        </div>
    );
}

export default ValorBoton
