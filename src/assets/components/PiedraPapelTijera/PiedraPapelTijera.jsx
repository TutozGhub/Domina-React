import { useState } from "react";

export default function PiedraPapelTijera() {
  const [player, setPlayer] = useState({ selection: "", score: 0 });
  const [cpu, setCpu] = useState({ selection: "", score: 0 });
  const [result, setResult] = useState({ value: "", show: false });
  const [delay, setDelay] = useState(false);

  const opciones = ["piedra", "papel", "tijera"];

  const eleccionUsuario = (e) => {
    setResult({ ...result, show: false });
    setPlayer({ ...player, selection: e.target.value });
    eleccionComputador();
  };

  const eleccionComputador = () => {
    const rand = Math.floor(Math.random() * 3);
    setCpu({ ...cpu, selection: opciones[rand] });
    setDelay(false);
  };

  const jugar = () => {
    if (player.selection && delay === false){
      let msg = "";
      if (player?.selection === cpu?.selection) {
          msg = "Empate";
      } else if (player?.selection === "piedra" && cpu?.selection === "tijera") {
        msg = "Tú ganas";
        setPlayer({ ...player, score: player?.score + 1 });
      } else if (player?.selection === "tijeras" && cpu?.selection === "papel") {
        msg = "Tú ganas";
        setPlayer({ ...player, score: player?.score + 1 });
      } else if (player?.selection === "papel" && cpu?.selection === "piedra") {
        msg = "Tú ganas";
        setPlayer({ ...player, score: player?.score + 1 });
      } else {
        msg = "Gana el CPU";
        setCpu({ ...cpu, score: cpu?.score + 1 });
      }
      setDelay(true);
      setResult( { value: msg, show: true});
    }
  };
  return (
    <>
      <div className="d-flex-column w-100 vh-100">
        <div className="mx-auto max-width-300">
          <h1>Piedra, papel o tijera</h1>
          <h4>Puntaje: </h4>
          <p>CPU: {cpu?.score}</p>
          <p>Tú: {player?.score}</p>
          <div className="my-4">
            <button className="btn me-2 btn-dark" onClick={eleccionUsuario} value='piedra'>
              Piedra
            </button>
            <button className="btn btn-dark me-2" onClick={eleccionUsuario} value='papel'>
              Papel
            </button>
            <button className="btn btn-dark me-2" onClick={eleccionUsuario} value='tijera'>
              Tijera
            </button>
          </div>
          <button className="btn btn-success" onClick={jugar}>Jugar</button>
          { (result.show && player.selection) &&
            <div className="card mt-4 p-3">
              <p>Elegiste: {player?.selection}</p>
              <p>La CPU eligio: {cpu?.selection}</p>
              <p
              className={`alert ${result?.value === 'Tú ganas' ? ' alert-success' : (result?.value === 'Gana el CPU' ? 'alert-danger' : 'alert-secondary')}`}
              >{result?.value}</p>
            </div>
          }
        </div>
      </div>
    </>
  );
}
