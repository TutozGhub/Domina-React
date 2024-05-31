import React from "react";

export default function Pais({ data }) {
  const card = {
    width: "18rem",
  };
  return (
    <div className="col">
        <div className="card mt-5" style={card}>
          <div className="card-header">
            <h2>{data?.nombre}</h2>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Atracciones principales: </strong>
              {data?.atracciones.join(", ")}
            </li>

            <li className="list-group-item">
              <strong>Idioma/s: </strong>
              {data?.idiomas.join(", ")}
            </li>

            <li className="list-group-item">
              <strong>Comidas populares: </strong>
              {data?.comidas.join(", ")}
            </li>
            <p>{data?.ranking_comida}</p>
            <p>{data?.ranking_hoteles}</p>
            <p>{data?.ranking_precios}</p>
          </ul>
        </div>
      </div>
  );
}