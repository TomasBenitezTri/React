import React from 'react';
import '../estilos/estilos layout/Footer.css'

const Footer = (props) =>{
    return(
        <div className='footer'>
            <div>
            Design by: Tomas Benitez - 2022 
            
            <div> 
            <a href= 'https://teclabianos-front.vercel.app/' 
            style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' > Full Stack </a>
            </div>
            


            <div> 
            <a href= 'https://www.linkedin.com/in/tomas-benitez-2a2a3118b/' 
            style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' > <i class="fa-brands fa-linkedin"></i></a>
            </div>

            <div> 
            <a href= 'https://expertobacktomasb.herokuapp.com/admin/login' 
            style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' > <i class="fa-brands fa-node"></i> </a>
            </div>
            <div> 
            <a href= 'https://relatosdeportistas.000webhostapp.com/index.php' 
            style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' > <i class="fa-brands fa-php"></i> </a>
            </div>

            <div> 
            <a href= 'https://www.instagram.com/tomas.benitez13/' 
            style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' > <i class="fa-brands fa-instagram"></i> </a>
            </div>
            </div>


        </div>
    );
}
export {Footer};