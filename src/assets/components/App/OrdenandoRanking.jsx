import React, { useEffect, useState } from 'react'
import Pais from '../BuscandoDatos/Pais';

export default function OrdenandoRanking() {
    const [order, setOrder] = useState("");
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("JSON/paises.json")
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
        })
        .catch((err) => setError(err));
    }, []);
  
    if (error){
      return <p>error al cargar el json: {error.message}</p>
    }
    
    const paisesFiltrados = countries.sort((a, b)=>{
      if (order !== ""){
        return a[order].localeCompare(b[order]);
      }
      else{
        return true;
      }
    })

    const ordenRanking = (orderBy)=>{
      setOrder(orderBy);
    }
  
    return (
      <>
        <div className="row gap-3 m-3">

          <div className="d-flex flex-row gap-2">
            <button className="btn btn-primary w-25 max-width-100" onClick={() => (ordenRanking("ranking_comida"))}>
              Comida
            </button>

            <button className="btn btn-secondary w-25 max-width-100" onClick={() => (ordenRanking("ranking_hoteles"))}>
              Hoteles
            </button>

            <button className="btn btn-success w-25 max-width-100" onClick={() => (ordenRanking("ranking_precios"))}>
              Precio
            </button>
          </div>

          {paisesFiltrados.map((item) => (
            <Pais key={item.nombre} data={item} />
          ))}
        </div>
      </>
    );
  }