import { useState } from 'react'
import './App.css'
import { Busqueda } from './Componentes/Busqueda'
import { Peticion } from './Componentes/Peticion'
import { NroAleatorio } from './Componentes/NroAleatorio'

function App() {
  const [buscarPersonaje, setBuscarPersonaje] = useState("")

  return (
    <>
      <Busqueda setBuscarPersonaje={setBuscarPersonaje}/>
      <Peticion buscarPersonaje={buscarPersonaje}/>
      <NroAleatorio />
    </>
  )
}

export default App
