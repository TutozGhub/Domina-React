import React from "react";

export default function Pais({ data }) {
  const card = {
    width: "18rem",
  };
  return (
    <div className="col">
        <div className="card mt-5 mx-auto h-100" style={card}>
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
          </ul>
        </div>
      </div>
  );
}