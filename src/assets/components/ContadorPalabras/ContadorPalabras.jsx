import React, { useState } from 'react'

export default function ContadorPalabras() {
  const [text, setText] = useState("");
  
  const conteo = text.trim() !== "" ? text.trim().split(" ").length + text.trim().split("\n").length - 1 : 0;

  return (
    <>
    <div className='m-4'>
      <h1>Contador de palabras</h1>
      <textarea
      className='w-100 max-width'
      rows={5}
      type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />
      <p>El texto tiene {conteo} palabras.</p>
    </div>
    </>
  )
}
