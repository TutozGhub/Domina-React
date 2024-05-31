import React, { useEffect } from 'react'
import { useState } from 'react'
import Pais from './Pais';

export default function BuscandoDatos() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('JSON/paises.json')
        .then((res)=> res.json())
        .then((data)=>{
            setCountries(data);
        })
        .catch((err)=> setError(err))
    },[])

    const paisesFiltrados = countries.filter((pais)=>
      pais.nombre.toLowerCase().includes(search.toLowerCase().trim())
    );

  return (
    <>
      <div className='row gap-3 m-3'>
          <input
          type="search"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          placeholder='Buscar'
          className='form-control'
          />
          {paisesFiltrados.map((item)=>(
            <Pais
            key={item.nombre}
            data={item}
            />
          ))}
      </div>
    </>
  )
}
