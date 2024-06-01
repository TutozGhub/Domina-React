import React, { useState, useEffect } from "react";
import Pais from "../BuscandoDatos/Pais";

export default function LeerMas() {
  const [countries, setCountries] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState(null);
  const [btn, setBtn] = useState({ style: "btn-success", text: "Mostrar más" });

  useEffect(() => {
    fetch("JSON/paises.json")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => setError(err));
  }, []);

  useEffect(() => {
    if (showAll === true){
        setBtn({...btn, text: "Mostrar menos", style: "btn-danger"})
    }
    else if (showAll === false){
        setBtn({...btn, text: "Mostrar más", style: "btn-success"})
    }
    console.log(showAll);
  }, [showAll])

  if (error) {
    return <p>error al cargar el json: {error.message}</p>;
  }

    const paisesFiltrados = showAll ? countries : countries.slice(0, 3);

  //   const ordenRanking = (orderBy) => {
  //     setOrder(orderBy);
  //   };

  const clickBtnHandler = ()=>{
    setShowAll(!showAll);
  }

  return (
    <>
    <div className="row gap-3 m-3">
        <div className="d-flex ">
            <button
            className={`btn ${btn.style} my-2 mx-auto`}
            onClick={clickBtnHandler}
            >
            {btn.text}
            </button>
        </div>
        {paisesFiltrados.map((item)=>(
            <Pais data={item} />
        ))}
    </div>
    </>
  );
}
