import { useState } from "react";

export default function InputsBasicos() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [direction, setDirection] = useState("");

  const [showValues, setShowValues] = useState(false);

  
  const enviarDatos = (e) => {
    e.preventDefault();
    setShowValues(true);
  };

  return (
    <div className="p-5">
      <form
      className="mx-auto p-4 max-width border-form"
      onSubmit={enviarDatos}
      >
        <div className="mb-3">
          <label
            className="form-label"
          >
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={mail}
            onChange={(e)=>setMail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            value={direction}
            onChange={(e)=>setDirection(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
      {showValues &&
      <div className="mt-4 mx-auto p-4 max-width alert alert-success">
          <h4>Tus datos son: </h4>
          <p><strong>Nombre: </strong>{name}</p>
          <p><strong>Email: </strong>{mail}</p>
          <p><strong>Dirección: </strong>{direction}</p>
      </div>
      }
    </div>
  );
}
