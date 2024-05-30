import React, { useState } from 'react'
import './styles.css';

export default function CambioColores() {
    const clases = ['claseA', 'claseB', 'claseC'];

    const [className, setClassName] = useState(clases[0]);
    const [title, setTitle] = useState('Texto de ejemplo');

  return (
    <div
    className='d-flex-column align-content-center mx-auto min-vh-100 w-75 max-width'
    >
        <h1>
            Cambio de colores
        </h1>
        <div className='card py-4'>
            <div className='card-body'> 
                <h1 className={'text-center ' + className}>{title}</h1>
                <input
                className='w-100'
                type="text"
                onChange={(e)=>setTitle(e.target.value)}
                />
                <hr />
                <div>
                    {clases.map((item, i)=> (
                        <button
                        key={i}
                        className='btn btn-primary m-0 mx-2'
                        onClick={()=>setClassName(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}