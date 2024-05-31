import React, { useEffect, useState } from "react";
import Pais from "../BuscandoDatos/Pais";

export default function Ordenando() {
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
    if (order === "ASC"){
      return a.nombre.localeCompare(b.nombre);
    }
    else if (order === "DESC"){
      return b.nombre.localeCompare(a.nombre);
    }
    else{
      return true;
    }
  })

  return (
    <>
      <div className="row gap-3 m-3">
        <div className="d-flex flex-row gap-2">
          <button className="btn btn-success w-25 max-width-100" onClick={() => (setOrder("ASC"))}>
            ASC
          </button>

          <button className="btn btn-danger w-25 max-width-100" onClick={() => (setOrder("DESC"))}>
            DESC
          </button>
        </div>

        {paisesFiltrados.map((item) => (
          <Pais key={item.nombre} data={item} />
        ))}
      </div>
    </>
  );
}