import { TYPES } from "./CarritoAction";
//pagina carrito 
export const shoppingInitialState = {
    products: [
        {id: 1, name:'Producto 1', price:100, img:'https://alfaomegaeditor.com.ar/wp-content/uploads/2021/03/TapaMassCust-600x600.jpg'},
        {id: 2, name:"Producto 2", price:200, img:'https://alfaomegaeditor.com.ar/wp-content/uploads/2021/04/TapaMatEmo-600x600.jpg'},
        {id: 3, name:"Producto 3", price:300, img:'https://alfaomegaeditor.com.ar/wp-content/uploads/2020/12/tapaMetrologia-1-600x600.jpg'},
        {id: 4, name:"Producto 4", price:400, img:'https://alfaomegaeditor.com.ar/wp-content/uploads/2021/03/TapaMetNum-600x600.jpg'},
        {id: 5, name:"Producto 5", price:500, img:'https://alfaomegaeditor.com.ar/wp-content/uploads/2020/10/TAPAMATEM-600x600.jpg'},
        {id: 6, name:"Producto 6", price:600, img:'https://alfaomegaeditor.com.ar/wp-content/uploads/2020/12/tapanumericos-600x600.jpg'},
    ],
    cart:[],
};
//pagina electricidad (ElectricidadPagina.js)
export const shoppingFinalState = {
    products: [
        {id: 1, name:'Pro' , price:100},
        {id: 2, name:"Prod", price:200},
        {id: 3, name:"Produc", price:300},
        {id: 4, name:"Product", price:400},
        {id: 5, name:"Producto", price:500},
        {id: 6, name:"Producto 6", price:600},
    ],
    cart:[],
};

export function CarritoReducer(state, action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(
                (product) => product.id === action.payload );
                //console.log(newItem);
            let itemInCart = state.cart.find(item => item.id === newItem.id  );
            return itemInCart 
            ? {
                ...state, 
                cart: state.cart.map(item => item.id===newItem.id ? {...item, quantity:item.
                quantity + 1}:item
                ),
            } 
            : {
                ...state, 
                cart: [...state.cart, {...newItem, quantity: 1}],
            };
              
            }
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item => item.id === action.payload);
            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map((item) => 
                item.id === action.payload 
                ? {...item, quantity: item.quantity - 1}: item),
            } 
            : {
                ...state,
                cart: state.cart.filter((item)=> 
                item.id !== action.payload),
            };
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            return{
                ...state,
                cart: state.cart.filter((item)=> 
                item.id !== action.payload)
            }
        }
        /*case TYPES.CLEAR_CART:
            return shoppingInitialState;
        default:
            return state;*/
    }
}