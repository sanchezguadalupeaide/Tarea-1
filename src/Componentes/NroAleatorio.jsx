import { useEffect, useState } from "react";

export const NroAleatorio = () => {
    const [personaje, setPersonaje] = useState([])

    const listaAleatoria = () => {
        let lista = []
        for (let index = 0; index < 5; index++) {
            let numero = Math.floor(Math.random() * (826 - 1 + 1) + 1);
            lista.push(numero)
        }
        console.log(lista)
        return lista
    }

    const getNumero = async () => {
        let lista = listaAleatoria()
        let respuesta = await fetch('https://rickandmortyapi.com/api/character/' + lista)
        let datos = await respuesta.json()
        
        setPersonaje(datos)
    }
    useEffect(()=>{
        getNumero()
    },[])
    if (personaje.length==0) {
        return
    }
    return <>
        <table border={1}>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen </th>
                    <th>Genero</th>
                    <th>Especie</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {personaje.map((element,index)=>{
                    return <tr key={index}> 
                        <td>{element.name}</td>
                        <td><img src={element.image} alt="" height={150} width={150}/></td>
                        <td>{element.gender}</td>
                        <td>{element.species}</td>
                        <td>{element.status}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}