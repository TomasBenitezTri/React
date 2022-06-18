import React from "react";
import '../estilos/estilos paginas/ElectricidadPagina.css';
import{useState, useEffect} from'react';
import axios from 'axios';
import NovedadItem from '../componentes/NovedadItem';


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

const ElectricidadPagina = (props) => {
    return(
        <div className="He">
        <div className="LibrosdeElectricidad">Libros de Electricidad</div>
        <div className="aa" >
            <div className="lb1"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>

        <div className="ab">
            <div className="lb2"></div>
        <EjemploProps02 elementos={infocaja}/>
        
        </div>
        
        <div className="ac">
            <div className="lb3"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>
        
        <div className="ad">
            <div className="lb4"></div>
            <EjemploProps02 elementos={infocaja}/>
        </div>
        
        <div className="ae">
            <div className="lb5"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>
        </div>
        
    );
}
export {ElectricidadPagina}
/*
import React, { useReducer } from "react";
import '../estilos/estilos layout/Carrito.css'
import { TYPES } from "./CarritoAction";
import { CarritoReducer, shoppingFinalState } from "./CarritoReducer";
import CartImtem from "./CartImtem";
import ProductItem from "./ProductItem";
const ElectricidadPagina = () => {
    const [state, dispatch] = useReducer(CarritoReducer, shoppingFinalState)
    const {products, cart} = state;
    const addToCart = (id) => {
        //console.log(id);
        dispatch({type: TYPES.ADD_TO_CART, payload:id});
    };
    const delFromCart = (id, all=false)=> {
        //console.log(id, all);
        if(all){
            dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload:id});
        } else {
            dispatch ({type: TYPES.REMOVE_ONE_FROM_CART, payload: id});
        }
    };
    /*const clearCart = () => {
        dispatch({type: TYPES.CLEAR_CART})
    };*/
    /*    
    return(
        <div className="carr">
            <h1>Carrito de Compras</h1>
            <h3>Productos a seleccionar</h3>
            <article className="box"> 
            {products.map((product)=> (
                <ProductItem key={product.id} 
                data={product} addToCart={addToCart}/>
            ))}
            </article>
            <h1>Carrito seleccionado</h1>
            <article className="box">
            {
                cart.map((item, index)=> <CartImtem key={index} data={item} 
                delFromCart={delFromCart}/>)
            } 
            </article>
            {/*<button className="carritodecompras" 
            onClick={clearCart}>Limpiar Carrito</button>*/ /*}  
        </div>
    );
}
*/
