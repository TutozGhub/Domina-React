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
        <Route path='/' element={<Proyectos />} />

        <Route path='/ConteoFinal' element={<ConteoFinal />} />
        <Route path='/JuegoTrivia' element={<JuegoTrivia />} />
        <Route path='/CambioColores' element={<CambioColores />} />
        <Route path='/Reloj' element={<Reloj />} />
        <Route path='/Sopa' element={<Sopa />} />
        <Route path='/Dado' element={<Dado />} />
        <Route path='/Flecha' element={<Flecha />} />
        <Route path='/BuscandoDatos' element={<BuscandoDatos />} />
        <Route path='/Ordenando' element={<Ordenando />} />
        <Route path='/OrdenandoRanking' element={<OrdenandoRanking />} />
        <Route path='/ListaUsuarios' element={<ListaUsuarios />} />
        <Route path='/LeerMas' element={<LeerMas />} />
        <Route path='/ContadorPalabras' element={<ContadorPalabras />} />
        <Route path='/InputsBasicos' element={<InputsBasicos />} />
        <Route path='/MostrarPass' element={<MostrarPass />} />
        <Route path='/Validacion' element={<Validacion />} />
        <Route path='/ValidacionAvanzada' element={<ValidacionAvanzada />} />
        <Route path='/ActivacionCondicional' element={<ActivacionCondicional />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/CalculadoraPropinas' element={<CalculadoraPropinas />} />
        <Route path='/PiedraPapelTijera' element={<PiedraPapelTijera />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
