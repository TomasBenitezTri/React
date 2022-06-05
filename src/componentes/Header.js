import React from 'react';
import '../estilos/estilos layout/Header.css'
import { NavLink } from 'react-router-dom';

const Header = (props) =>{
    return(
        <div className='Head'>
            BibliHouse
            <div className='carrito'>
                <NavLink 
                    to='/carrito' 
                        style={{ textDecoration: 'none', color: '#fffe00'}}>
                    🛒 Carrito
                </NavLink> 
            </div>
        </div>
        
    );
}
export {Header};