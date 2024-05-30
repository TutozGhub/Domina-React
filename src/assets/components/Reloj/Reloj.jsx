import React, { useEffect, useState } from 'react'
import './styles.css';

export default function Reloj() {

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        }, 1000)
        return()=> clearInterval(intervalId);
    }, []);

    const segRotation = {
        transform: `rotate(${time.getSeconds() * 6}deg)`
    };
    const minRotation = {
        transform: `rotate(${time.getMinutes() * 6}deg)`
    };
    const hourRotation = {
        transform: `rotate(${time.getHours() * 30}deg)`
    };

  return (
    <div className='d-flex justify-content-center align-items-center w-100 vh-100 text-center'>
        <div>
            <h1>Reloj analógico</h1>
            <div className='reloj'>
                <div className='caratula'>
                    <div className='caratula-mini caratula-h'>
                        <div className='manecilla horas' style={hourRotation}></div>
                    </div>
                    <div className='caratula-mini caratula-m'>
                        <div className='manecilla minutos' style={minRotation}></div>
                    </div>
                    <div className='caratula-mini caratula-s'>
                        <div className='manecilla segundos' style={segRotation}></div>
                    </div>
                    <div className='centro'></div>
                </div>
            </div>
        </div>
    </div>
  )
}
