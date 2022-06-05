import React from 'react'

const ProductItem = ({data, addToCart}) => {
    let {id, name, price, img} = data;


    return (
        <div className='cajadecajaindividual'>
        <div className='cajaindividual'>
            <div><img src={img} alt="" width="150"/></div>
            <div>{name}</div>
            <div>${price}</div>
            <button className='carritodecompras' onClick={()=> addToCart(id)} >Agregar</button>

        </div>
        </div>
    )
}

export default ProductItem
