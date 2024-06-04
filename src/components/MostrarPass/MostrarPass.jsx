import { useState } from "react";

export default function MostrarPass() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="p-5">
      <form className="mx-auto p-4 max-width border-form">
        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input type="text" className="form-control" />
        </div>
        <label className="form-label">Contraseña</label>
        <div className="input-group mb-3">
          <input
            type={!showPass ? "password" : "text"}
            className="form-control"
          />
          <button
            className={`btn ${!showPass ? "btn-primary " : "btn-danger"}`}
            type="button"
            onClick={() => setShowPass(!showPass)}
          >
            {!showPass ? (
              <i className="fa-solid fa-eye show-hide"></i>
            ) : (
              <i className="fa-solid fa-eye-slash show-hide"></i>
            )}
          </button>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
