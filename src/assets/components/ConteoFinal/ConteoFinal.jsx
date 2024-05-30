import React, { useEffect, useState } from 'react'

export default function ConteoFinal() {

    const [count, setCount] = useState(10);
    const [isActive, setIsActive] = useState(false);
    
    const stopCounter = ()=>{
        setIsActive(false);
    }
    const resetCounter = ()=>{
        stopCounter();
        setCount(10);
    }

    const startCounter = ()=>{
        resetCounter();
        setIsActive(true);
    }
    const onClickStartHandler = (e)=>{
        if (isActive == false && count > 0){
            e.target.className = "btn btn-danger"
            e.target.textContent = "Detener"
            startCounter();
        }
        else{
            e.target.className = "btn btn-primary"
            e.target.textContent = "Iniciar"
            stopCounter();
        }
    }

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            if (isActive == true){
                if (count == 0){
                    stopCounter();
                }
                else{
                    setCount(count - 1);
                }
            }
        }, 1000)
        return ()=>{
            clearInterval(intervalId);
        }
    })
    
  return (
    <div
    className='d-flex-column align-content-center mx-auto min-vh-100 w-75 max-width'
    >
        <h1>
            Cuenta regresiva
        </h1>
        <div className='card py-4'>
            <h1 className='mx-auto mb-5'>
                {count}
            </h1>

            <div className='d-flex mx-auto gap-2'>
                <button
                    className='btn btn-primary'
                    onClick={(e)=>{onClickStartHandler(e)}}
                    >
                    Iniciar
                </button>

                <button
                    className='btn btn-primary'
                    onClick={resetCounter}
                    >
                    Reiniciar
                </button>
            </div>
        </div>
    </div>
  )
}

