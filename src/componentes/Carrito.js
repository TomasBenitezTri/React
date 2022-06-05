import React, { useReducer } from "react";
import '../estilos/estilos layout/Carrito.css'
import { TYPES } from "../paginas/CarritoAction";
import { CarritoReducer, shoppingInitialState } from "../paginas/CarritoReducer";
import CartImtem from "../paginas/CartImtem";
import ProductItem from "../paginas/ProductItem";

const Carrito = () => {
    const [state, dispatch] = useReducer(CarritoReducer, shoppingInitialState)
    
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
        
    return(
        <div className="carr">
            <h1>Carrito de Compras</h1>
            <h3>Productos a seleccionar</h3>
            <article className="box"> 
            
            {products.map((product)=> (
                <ProductItem key={product.id} data={product} addToCart={addToCart}/>
            ))}
            </article>
            
            <h1>Carrito seleccionado</h1>
            
            <article className="box">

  
            {
                cart.map((item, index)=> <CartImtem key={index} data={item} delFromCart={delFromCart}/>)
            }
            
            </article>
            {/*<button className="carritodecompras" onClick={clearCart}>Limpiar Carrito</button>*/}  
        </div>
    );
}
export {Carrito}