import React, { useEffect, useState } from 'react'
import LinkProyecto from './LinkProyecto'

export default function Proyectos() {

    const [paths, setPaths] = useState([]);

    useEffect(()=>{
        fetch('src\\assets\\jsons\\paths.json')
        .then((res) => res.json())
        .then((data)=>{
            setPaths(data);
        })
        .catch((error)=>{
            console.log("Error al cargar los paths", error);
        })
    }, [])

    return(
        <div className='d-flex justify-content-center align-items-center w-100 vh-100'>
            <ol className='list-group list-group-numbered w-75 max-width'>
                {paths.map((item)=>(
                    <LinkProyecto 
                    key = {item.path}
                    name = {item.name}
                    path = {item.path}
                    />
                ))}
            </ol>
        </div>
    )
}
