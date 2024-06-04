import "./App.css";
import Proyectos from "./components/Proyectos/Proyectos.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConteoFinal from './components/ConteoFinal/ConteoFinal.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import JuegoTrivia from './components/JuegoTrivia/JuegoTrivia.jsx';
import CambioColores from './components/CambioColores/CambioColores.jsx';
import Reloj from './components/Reloj/Reloj.jsx';
import Sopa from './components/Sopa/Sopa.jsx';
import Dado from './components/Dado/Dado.jsx';
import Flecha from './components/Flecha/Flecha.jsx';
import BuscandoDatos from './components/BuscandoDatos/BuscandoDatos.jsx';
import Ordenando from './components/Ordenando/Ordenando.jsx';
import OrdenandoRanking from './components/OrdenandoRanking/OrdenandoRanking.jsx';
import ListaUsuarios from './components/ListaUsuarios/ListaUsuarios.jsx';
import LeerMas from './components/LeerMas/LeerMas.jsx';
import ContadorPalabras from './components/ContadorPalabras/ContadorPalabras.jsx';
import InputsBasicos from './components/InputsBasicos/InputsBasicos.jsx';
import MostrarPass from './components/MostrarPass/MostrarPass.jsx';
import Validacion from './components/Validacion/Validacion.jsx';
import ValidacionAvanzada from './components/ValidacionAvanzada/ValidacionAvanzada.jsx';
import ActivacionCondicional from './components/ActivacionCondicional/ActivacionCondicional.jsx';
import Carrito from './components/Carrito/Carrito.jsx';
import CalculadoraPropinas from './components/CalculadoraPropinas/CalculadoraPropinas.jsx';
import PiedraPapelTijera from './components/PiedraPapelTijera/PiedraPapelTijera.jsx';


function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/Domina-React/' element={<Proyectos />} />
        <Route path='/Domina-React/ConteoFinal' element={<ConteoFinal />} />
        <Route path='/Domina-React/JuegoTrivia' element={<JuegoTrivia />} />
        <Route path='/Domina-React/CambioColores' element={<CambioColores />} />
        <Route path='/Domina-React/Reloj' element={<Reloj />} />
        <Route path='/Domina-React/Sopa' element={<Sopa />} />
        <Route path='/Domina-React/Dado' element={<Dado />} />
        <Route path='/Domina-React/Flecha' element={<Flecha />} />
        <Route path='/Domina-React/BuscandoDatos' element={<BuscandoDatos />} />
        <Route path='/Domina-React/Ordenando' element={<Ordenando />} />
        <Route path='/Domina-React/OrdenandoRanking' element={<OrdenandoRanking />} />
        <Route path='/Domina-React/ListaUsuarios' element={<ListaUsuarios />} />
        <Route path='/Domina-React/LeerMas' element={<LeerMas />} />
        <Route path='/Domina-React/ContadorPalabras' element={<ContadorPalabras />} />
        <Route path='/Domina-React/InputsBasicos' element={<InputsBasicos />} />
        <Route path='/Domina-React/MostrarPass' element={<MostrarPass />} />
        <Route path='/Domina-React/Validacion' element={<Validacion />} />
        <Route path='/Domina-React/ValidacionAvanzada' element={<ValidacionAvanzada />} />
        <Route path='/Domina-React/ActivacionCondicional' element={<ActivacionCondicional />} />
        <Route path='/Domina-React/Carrito' element={<Carrito />} />
        <Route path='/Domina-React/CalculadoraPropinas' element={<CalculadoraPropinas />} />
        <Route path='/Domina-React/PiedraPapelTijera' element={<PiedraPapelTijera />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
