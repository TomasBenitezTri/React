import React from 'react';
import { NavLink } from 'react-router-dom';
import '../estilos/estilos layout/Nav.css'
const Nav = (props) =>{
    return(
        <nav className='nav'>
        <div className='div'>
            <ul className='cajanav' >
                <li className='cajahome'><NavLink to='/React' style={{ textDecoration: 'none', color: 'black'}}>Home</NavLink> </li>
                <li className='cajaelec'><NavLink to='/electricidad' style={{ textDecoration: 'none', color: 'black'}}>Electricidad</NavLink> </li>
                <li className='cajamec'><NavLink to='/mecanica' style={{ textDecoration: 'none', color: 'black'}}>Mecánica</NavLink> </li>
                <li className='cajaetro'><NavLink to='/electronica' style={{ textDecoration: 'none', color: 'black'}} >Electrónica</NavLink> </li>
            </ul>
        </div>
        </nav>
    );
}
export {Nav};