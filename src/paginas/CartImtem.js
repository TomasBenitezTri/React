import React from 'react'

const CartImtem = ({data, delFromCart}) => {
    let {id, name, price, quantity, img} = data;
    return (
        <div>
            
            <div className='cajadecajaindividual'>
            <div className='cajaindividual'>
            <div><img src={img} alt="" width="150" /></div>
            <h4>{name}</h4>
            <h5>${price} x {quantity} = ${price*quantity}</h5>
            
            <button className='carritodecompras' onClick={()=> delFromCart(id)}>Eliminar Uno</button>
            <button className='carritodecompras' onClick={()=> delFromCart(id, true)}>Eliminar Todos</button>
            
            </div>
            </div>
        </div>
    )
}

export default CartImtem
