import { useRef } from "react"

export const Busqueda = ({setBuscarPersonaje}) =>{
    const inputRef = useRef()
    return<>
        <input type="text"
        ref={inputRef}
        placeholder="Introduzca un personaje" 
        />
        <button onClick={() => {setBuscarPersonaje(inputRef.current.value)}}>Buscar</button>
        </>
}
