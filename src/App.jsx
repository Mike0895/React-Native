import { useRef } from 'react'


const App = () => {
  const nombreRef = useRef()
  const resultadoRef = useRef();

  const procesar =() => {
    const valor = nombreRef.current.value;
    resultadoRef.current.innerHTML = valor;

  }

    return (
    <div>
      <div>
        <input type="text" ref={nombreRef}></input>
        <button onClick={procesar} >Enviar</button>
        <div ref={resultadoRef} ></div>
      </div>
    </div>
    )
  }

export default App
