import React from 'react'

// let item = {nombre : "Hamburguesa", plato:"congelado", stock:2}

function ItemListContainer({nombre, plato, stock}) {
    
    return (
        <div className="Container">

                <h2> Producto: {nombre} </h2>
                <h2> Tipo de plato: {plato} </h2>
                <h2> Sotck en tienda: {stock} </h2>
            
            
        </div>
    )
}

export default ItemListContainer
