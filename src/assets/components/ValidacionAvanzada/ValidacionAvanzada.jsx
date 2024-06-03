import { useState } from 'react'

export default function ValidacionAvanzada() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [direction, setDirection] = useState("");

    const [validName, setValidName] = useState(false);
    const [validMail, setValidMail] = useState(false);
    const [validDirection, setValidDirection] = useState(false);

    const [showMessage, setShowMessage] = useState(false);

  const nombreUpdate = (e) => {
    setName(e.target.value);
    setValidName(e.target.value.trim().length > 3);
  };
  const emailUpdate = (e) => {
    setMail(e.target.value);
    setValidMail(/^\S+@\S+\.\S+$/.test(e.target.value));
  };
  const direccionUpdate = (e) => {
    setDirection(e.target.value);
    setValidDirection(e.target.value.trim().length > 3);
  };
  const enviarDatos = (e) => {
    e.preventDefault();
    setShowMessage(true);
    (validName && validMail && validDirection) ? alert("Exito!!!") : null;
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
          { (showMessage && !validName) &&
            <p className='red'>
                El nombre debe tener mas de 3 letras.
            </p>
          }
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            value={mail}
            onChange={emailUpdate}
          />
          { (showMessage && !validMail) &&
            <p className='red'>
                Debe utilizar un mail valido.
            </p>
          }
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            value={direction}
            onChange={direccionUpdate}
          />
          { (showMessage && !validDirection) &&
            <p className='red'>
                La dirección debe tener mas de 3 letras.
            </p>
          }
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
