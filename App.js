
import { useState } from 'react';
import './App.css';

function App() {

  const [tirada, setTirada] = useState(1)

  const [valor, setValor] = useState("")

  const [tiradaDin, setTiradaDin] = useState(1)

  const [valorDin, setValorDin] = useState("")

  const [numDin, setNumDin] = useState(20)

  const handleChange = event => {
    if(event.target.value < 1){
      event.target.value = 1
    }

    if(event.target.value > 1000){
      return ""
    }
    setNumDin(event.target.value)
  }

  let conteo = ""

  let conteoDin = ""


  /* funciones para los dados de 6 */

  function random6(){
    return Math.ceil(Math.random() * 6)
  }

  
   function rollDado6(){
    for(let i = 0; i < tirada; i++){
      if(tirada === 1){
        conteo = random6()
      } else{
        conteo += random6() + "-";
      }
    }

    (tirada === 1 ? setValor(conteo) : setValor(conteo.slice(0,-1)))
    
   
   }
  
  function aumentarTirada6() {
    if(tirada > 29){

    } else{
      setTirada(tirada + 1)
    }
  } 
  function reducirTirada6() {
    if(tirada < 2){

    } else{
      setTirada(tirada -1)
    }
    
  }

  function reset(){
    setValor("")
    setTirada(1)
  }

  /* funciones para los dados dinamicos */

  function randomDin(){
    return Math.ceil(Math.random() * numDin)
  }

  
   function rollDadoDin(){
    for(let i = 0; i < tiradaDin; i++){
      if(tiradaDin === 1){
        conteoDin = randomDin()
      } else{
        conteoDin += randomDin() + "-";
      }
    }

    (tiradaDin === 1 ? setValorDin(conteoDin) : setValorDin(conteoDin.slice(0,-1)))
    
   
   }
  
  function aumentarTiradaDin() {
    if(tiradaDin > 29){

    } else{
      setTiradaDin(tiradaDin + 1)
    }
    
  } 
  function reducirTiradaDin() {
    if(tiradaDin < 2){

    } else{
      setTiradaDin(tiradaDin -1)
    }
  }

  function resetDin(){
    setValorDin("")
    setTiradaDin(1)
    setNumDin(20)
  }

  /* inicio del html */

  return (
    <div className="App">
      <h1>Simulador de dados!</h1>

    <div className='contenedor'>
      <div className='caja'>
        <h4>Tirada con dados de 6 caras</h4>
        <p>Cantidad de tiradas: {tirada}</p>
        <div className='caja-resultado'>
          <p>Resultado: {valor}</p>
        </div>
        <div className='caja-botones'>
          <button onClick={aumentarTirada6}>+</button>
          <button onClick={rollDado6}>Rollear!</button>
          <button onClick={reset}>Reset</button>
          <button onClick={reducirTirada6}>-</button>
        </div>
      </div>

      <div className='caja'> 
        <h4>Tirada de dados con valor seleccionado</h4>
        <p>El valor actual es de: <input onChange={handleChange} type="number" value={numDin} /></p> 
        <p>Cantidad de tiradas: {tiradaDin}</p>
        <div className='caja-resultado'>
          <p>Resultado: {valorDin}</p>
        </div>
        <div className='caja-botones'>
          <button onClick={aumentarTiradaDin}>+</button>
          <button onClick={rollDadoDin}>Rollear!</button>
          <button onClick={resetDin}>Reset</button>
          <button onClick={reducirTiradaDin}>-</button>
        </div>
      </div>
    </div>
      

      
      

    </div>
  );
}

export default App;
