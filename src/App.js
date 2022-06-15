import './estilos/estilos index y app/App.css';
import {React} from 'react';
import { LibroEnMente, VistaConsola, Mailer, /*ContactoPage*/} from './paginas/HomePagina';



import {Header} from './componentes/Header';
import {Nav} from './componentes/Nav';
import {Carrito} from './componentes/Carrito';
import {Footer} from './componentes/Footer';
import {Favoritos} from './paginas/Favoritos';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePagina} from './paginas/HomePagina';
import {ElectricidadPagina} from './paginas/ElectricidadPagina';
import {MecanicaPagina} from './paginas/MecanicaPagina';
import {ElectronicaPagina} from './paginas/ElectronicaPagina';

function App() {
  return (

      <Router>
      <Header />
      <Nav />
      <LibroEnMente/>
      <Routes>
        <Route path='/carrito' element = {<Carrito/>}/>
        <Route path='/favoritos' element = {<Favoritos/>} />
      </Routes>
        <Routes>
          <Route path='/React' element = {<HomePagina/>} />
          <Route path='/electricidad' element = {<ElectricidadPagina/>}/>
          <Route path='/mecanica' element = {<MecanicaPagina/>}/>
          <Route path='/electronica' element = {<ElectronicaPagina/>}/>
      </Routes>
      <Routes>
        <Route path='/' element = {<VistaConsola/>} />
      </Routes>
      <Mailer/>
      {/*<ContactoPage/>*/}
      <Footer />
      </Router>

  );
}
export default App;