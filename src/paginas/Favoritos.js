import React from 'react';
import '../estilos/estilos paginas/FavPagina.css'

const librosfav = ['Libro 1', 'Libro 2'
, 'Libro 3', 'Libro 4'];

const CambiarAObjetos = props => {
    const { elementos } = props;
    return (
        <ul>
            {elementos.map(elemento => <li key={elemento}>{elemento}</li>)}
        </ul>
    );
};

function Favoritos() {
    return (
        <div>
            <h1>Próximamente podrás agregar tu libros favoritos!!!</h1>
            <CambiarAObjetos elementos={librosfav}/>
        </div>
    );
}

export {Favoritos};