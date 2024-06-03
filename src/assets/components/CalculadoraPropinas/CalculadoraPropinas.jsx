import { useState } from "react";

export default function CalculadoraPropinas() {
  const [acountAmount, setAcountAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const calcularTotal = () => {
    const propina = ((acountAmount * tipPercentage) / 100);
    setTipAmount(propina);
    setTotal(Number(acountAmount) + Number(propina));
  };

  return (
    <div className="d-flex-column align-content-center w-100 vh-100">
      <div className="card mx-auto max-width-300">
        <div className="card-header">
          <h4>Calculadora de propinas</h4>
        </div>
        <div className="card-body">
          <p>Monto de la cuenta: </p>
          <input
            className="form-control"
            type="number"
            value={acountAmount}
            onChange={(e) => {
              setAcountAmount(e.target.value);
            }}
          />
        </div>
        <hr />
        <div className="card-body">
          <p>Porcentaje de propina: </p>
          <input
            className="form-control"
            type="number"
            value={tipPercentage}
            onChange={(e) => {
              setTipPercentage(e.target.value);
            }}
          />
        </div>
        <hr />
        <div className="card-body">
          <button className="btn btn-primary" onClick={calcularTotal}>
            Calcular Total
          </button>
        </div>
      </div>
        { total > 0 &&
            <>
                <div className="card p-4 max-width-300 mx-auto">
                    <p>Propina: ${tipAmount}</p>
                    <p>Total: ${total}</p>
                </div>
            </>
        }
    </div>
  );
}
