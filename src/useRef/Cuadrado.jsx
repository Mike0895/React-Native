import { useRef } from 'react'

const Cuadrado = () => {
    const anchoCuadradoRef = useRef();
    const altoCuadradoRef = useRef();
    const resultadoRef = useRef();

    const calculate = () => {
        const ancho = anchoCuadradoRef.current.value ;
        const alto = altoCuadradoRef.current.value;
        const resultado = ancho * alto;
        resultadoRef.current.innerHTML = `La superficie del rectangulo es ${ resultado}`;

    }


  return (
    <div>
      <input type='number' placeholder='ancho' ref={anchoCuadradoRef}></input>
      <input type='number' placeholder='alto' ref={anchoCuadradoRef}></input>
      <button onClick={ calculate }>Calcular</button>
      <p ref={ resultadoRef }></p>
    </div>
  )
}

export default Cuadrado
