import { useEffect, useState } from 'react'
import LinkProyecto from './LinkProyecto'

export default function Proyectos() {

    const [paths, setPaths] = useState([]);

    useEffect(()=>{
        fetch('JSON/paths.json')
        .then(res=> res.json())
        .then(data=>{
            setPaths(data);
        })
    }, [])

    return(
        <div className='d-flex justify-content-center align-items-center w-100 my-4'>
            <ol className='list-group w-75 max-width'>
                {paths?.map((item)=>(
                    <>
                        <li className="list-group-item">{item?.capitulo}</li>
                        <ol className='list-group list-group-numbered mb-4'>
                            {item?.paths?.map((paths)=>(
                                <LinkProyecto 
                                key = {paths?.path}
                                name = {paths?.name}
                                path = {paths?.path}
                                />
                            ))}
                        </ol>
                    </>
                ))}
            </ol>
        </div>
    )
}
