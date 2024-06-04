import React, { useEffect, useState } from 'react'
import './styles.css'

export default function Flecha() {
    const [x, setX] = useState(45);
    const [y, setY] = useState(45);

    const step = 10;
    
    const position = {
        "left": x + "px",
        "top": y + "px"
    }

    useEffect(()=>{
        function handleKeyDown(e){
            switch (e.key){
                case "w":
                    setY(prevY => prevY - step);
                    break;
                case "a":
                    setX(prevX => prevX - step);
                    break;
                case "s":
                    setY(prevY => prevY + step);
                    break;
                case "d":
                    setX(prevX => prevX + step);
                    break;
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

  return (
    <div className='w-100 p-5'>
    <h1>Apunta la flecha</h1>
        <h5>Usa W A S D para moverte</h5>
        <div
        className='personaje'
        style={position}
        >
        </div>
    </div>
  )
}
