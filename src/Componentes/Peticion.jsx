import { useEffect, useState } from "react"

export const Peticion = ({ buscarPersonaje }) => {

    const [personaje, setPersonaje] = useState([])
    

    const getPersonaje = async () => {
        let respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${buscarPersonaje}` )
        let datos = await respuesta.json()
        setPersonaje(datos.results)
    }

    useEffect(() => {
        if (buscarPersonaje!=="") {
             getPersonaje();
        }
           
    }, [buscarPersonaje]);

    {/* getPersonaje se ejecuta cada vez que buscarPersonaje cambia */}
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
