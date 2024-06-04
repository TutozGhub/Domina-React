import React, { useState } from 'react'

export default function Dado() {

    const [dice, setDice] = useState(1);

    const throwDice = ()=>{
        const rand = Math.floor(Math.random() * 6) + 1;
        setDice(rand);
    }

  return (
    <div className='d-flex justify-content-center align-items-center w-100 mt-5'>
        <div className='text-center'>
            <h1 className='display-1'><strong>{dice}</strong></h1>

            <button
            className='btn btn-success'
            onClick={throwDice}
            >
                Tirar el dado
                </button>
        </div>
    </div>
  )
}
