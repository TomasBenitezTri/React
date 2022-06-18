import React from 'react';
import '../estilos/estilos layout/Footer.css'

const Footer = (props) =>{
    return(
        <div className='footer'>
            <div>
            Design by: Tomas Benitez - 2022 
            <div> 
            <a href= 'https://www.instagram.com/tomas.benitez13/' style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' > Instagram </a>
            </div>
            <div> 
            <a href= 'https://www.facebook.com/profile.php?id=100008295554789' style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' > Facebook </a>
            </div>
            <div> 
            <a href= 'https://expertobacktomasb.herokuapp.com/admin/login' style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' > Node </a>
            </div>
            <div> 
            <a href= 'https://relatosdeportistas.000webhostapp.com/index.php' style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' > PHP </a>
            </div>
            </div>

        </div>
    );
}
export {Footer};