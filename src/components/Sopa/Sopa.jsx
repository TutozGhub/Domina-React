import React, { useState } from 'react'
import './styles.css'

export default function Sopa() {
    const [selected, setSelected] = useState('Has click sobre la "mosca"');
    const [correct, setCorrect] = useState(false)

    const onClickItemHandler =(e)=>{
        e.stopPropagation();
        const dataName = e.target.attributes['data-name'].value;
        (dataName === "Mosca") ? setCorrect(true) : setCorrect(false)
        console.log(dataName);
        setSelected(dataName);
    }

  return (
    <div className='d-flex justify-content-center align-items-center w-100 mt-5'>
        <div>
            <h1>Hay una mosca en mi sopa</h1>
            <p
            className={"text-center " + (correct ? "green" : "red")}
            >
            {selected}
            </p>

            <div
            className='sopa'
            data-name='Sopa'
            onClick={(e)=>onClickItemHandler(e)}
                >
                <div
                className='item mt-200 ms-300'
                data-name='Guisante 1'
                onClick={(e)=>onClickItemHandler(e)}
                ></div>

                <div
                className='item mt-100 ms-100'
                data-name='Guisante 2'
                onClick={(e)=>onClickItemHandler(e)}
                ></div>

                <div
                className='item mt-300 ms-200'
                data-name='Guisante 3'
                onClick={(e)=>onClickItemHandler(e)}
                ></div>

                <div
                className='mosca mt-200 ms-100'
                data-name='Mosca'
                onClick={(e)=>onClickItemHandler(e)}
                ></div>
            </div>
        </div>
    </div>
  )
}
