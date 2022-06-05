import React from "react";
import '../estilos/estilos paginas/ElectronicaPagina.css';

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

const ElectronicaPagina = (props) => {
    return(
        <div className="He">
        <div className="LibrosdeElectricidad">Libros de Electrónica</div>
        
        <div className="aa" >
            <div className="li1"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>

        <div className="ab">
            <div className="li2"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>
        
        <div className="ac">
            <div className="li3"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>
        
        <div className="ad">
            <div className="li4"></div>
            <EjemploProps02 elementos={infocaja}/>
        </div>
        
        <div className="ae">
            <div className="li5"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>
        
        </div>
    );
}
export {ElectronicaPagina}