import { useState } from "react";

export default function Validacion() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [direction, setDirection] = useState("");

    const [validName, setValidName] = useState(false);
    const [validMail, setValidMail] = useState(false);
    const [validDirection, setValidDirection] = useState(false);

    const [showMessage, setShowMessage] = useState(false);
    const [isValid, setIsValid] = useState(false);

  const nombreUpdate = (e) => {
    setName(e.target.value);
    setValidName(e.target.value.trim().length > 3);
    setShowMessage(false);
  };
  const emailUpdate = (e) => {
    setMail(e.target.value);
    setValidMail(/^\S+@\S+\.\S+$/.test(e.target.value));
    setShowMessage(false);
  };
  const direccionUpdate = (e) => {
    setDirection(e.target.value);
    setValidDirection(e.target.value.trim().length > 3);
    setShowMessage(false);
  };
  const enviarDatos = (e) => {
    e.preventDefault();
    if (validName && validMail && validDirection){
        setIsValid(true);
    }
    else{
        setIsValid(false);
    }
    setShowMessage(true);
  };

  return (
    <div className="p-5">
      <form
        className="mx-auto p-4 max-width border-form"
        onSubmit={enviarDatos}
      >
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={nombreUpdate}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            value={mail}
            onChange={emailUpdate}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            value={direction}
            onChange={direccionUpdate}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
      {showMessage && (
        <div className={`mt-4 mx-auto p-4 max-width alert ${isValid ? 'alert-success' : 'alert-danger'}`}>
            {isValid ? 'Formulario cargado con exito!!' : 'Datos invalidos'}
        </div>
      )}
    </div>
  );
}
