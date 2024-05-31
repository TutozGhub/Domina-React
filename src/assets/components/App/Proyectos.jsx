import React, { useEffect, useState } from 'react'
import LinkProyecto from './LinkProyecto'
import {PATHS} from './Paths'

export default function Proyectos() {

    const [paths, setPaths] = useState([]);

    useEffect(()=>{
        setPaths(PATHS);
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
