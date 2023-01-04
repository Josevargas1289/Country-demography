import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Countrie from './components/Countrie'



function App() {
  const [count, setCount] = useState(0)
  const [isViseble, setIsViseble] = useState(true)

 const change =()=>{
  setIsViseble(!isViseble)
 }

  return (
    <div className="App">


        <button className='btn-change' onClick={change}>
          Mostrar/ocultar
        </button>
        {isViseble &&  <Countrie /> }
    </div>
  )
}

export default App
