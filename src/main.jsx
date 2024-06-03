import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConteoFinal from "./assets/components/ConteoFinal/ConteoFinal";
import 'bootstrap/dist/css/bootstrap.min.css';
import JuegoTrivia from "./assets/components/JuegoTrivia/JuegoTrivia";
import CambioColores from "./assets/components/CambioColores/CambioColores";
import Reloj from "./assets/components/Reloj/Reloj";
import Sopa from "./assets/components/Sopa/Sopa";
import Dado from "./assets/components/Dado/Dado";
import Flecha from "./assets/components/Flecha/Flecha";
import BuscandoDatos from './assets/components/BuscandoDatos/BuscandoDatos.jsx';
import Ordenando from './assets/components/Ordenando/Ordenando.jsx';
import OrdenandoRanking from './assets/components/OrdenandoRanking/OrdenandoRanking.jsx';
import ListaUsuarios from './assets/components/ListaUsuarios/ListaUsuarios.jsx';
import LeerMas from './assets/components/LeerMas/LeerMas.jsx';
import ContadorPalabras from './assets/components/ContadorPalabras/ContadorPalabras.jsx';
import InputsBasicos from './assets/components/InputsBasicos/InputsBasicos.jsx';
import MostrarPass from './assets/components/MostrarPass/MostrarPass.jsx';
import Validacion from './assets/components/Validacion/Validacion.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="ConteoFinal" element={<ConteoFinal />} />
        <Route path="JuegoTrivia" element={<JuegoTrivia />} />
        <Route path="CambioColores" element={<CambioColores />} />
        <Route path="Reloj" element={<Reloj />} />
        <Route path="Sopa" element={<Sopa />} />
        <Route path="Dado" element={<Dado />} />
        <Route path="Flecha" element={<Flecha />} />
        <Route path="BuscandoDatos" element={<BuscandoDatos />} />
        <Route path="Ordenando" element={<Ordenando />} />
        <Route path="OrdenandoRanking" element={<OrdenandoRanking />} />
        <Route path="ListaUsuarios" element={<ListaUsuarios />} />
        <Route path="LeerMas" element={<LeerMas />} />
        <Route path="ContadorPalabras" element={<ContadorPalabras />} />
        <Route path="InputsBasicos" element={<InputsBasicos />} />
        <Route path="MostrarPass" element={<MostrarPass />} />
        <Route path="Validacion" element={<Validacion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
