import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ConteoFinal from "./assets/components/ConteoFinal/ConteoFinal";
import Proyectos from "./assets/components/App/Proyectos";
import 'bootstrap/dist/css/bootstrap.min.css';
import JuegoTrivia from "./assets/components/JuegoTrivia/JuegoTrivia";
import CambioColores from "./assets/components/CambioColores/CambioColores";
import Reloj from "./assets/components/Reloj/Reloj";
import Sopa from "./assets/components/Sopa/Sopa";
import Dado from "./assets/components/Dado/Dado";
import Flecha from "./assets/components/Flecha/Flecha";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Proyectos />} />

          <Route path="/ConteoFinal" element={<ConteoFinal />} />
          <Route path="/JuegoTrivia" element={<JuegoTrivia />} />
          <Route path="/CambioColores" element={<CambioColores />} />
          <Route path="/Reloj" element={<Reloj />} />
          <Route path="/Sopa" element={<Sopa />} />
          <Route path="/Dado" element={<Dado />} />
          <Route path="/Flecha" element={<Flecha />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
