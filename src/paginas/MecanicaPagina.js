import React from "react";
import '../estilos/estilos paginas/MecanicaPagina.css';

const infocaja = ['Precio: $ ', '♡', '+ Carrito'];

const EjemploProps02 = props => {
    const { elementos } = props;
    return (
        <ul>
            {elementos.map(elemento => 
            <li className="julio" key={elemento}>{elemento}</li>)}
        </ul>
    );
};

const MecanicaPagina = (props) => {
    return(
        <div className="He">
        <div className="LibrosdeElectricidad">Libros de Mecánica</div>
        
        <div className="aa" >
            <div className="lib1"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>

        <div className="ab">
            <div className="lib2"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>
        
        <div className="ac">
            <div className="lib3"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>
        
        <div className="ad">
            <div className="lib4"></div>
            <EjemploProps02 elementos={infocaja}/>
        </div>
        
        <div className="ae">
            <div className="lib5"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>
        
        </div>
    );
}
export {MecanicaPagina}