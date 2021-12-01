import React from 'react'
import Item from "./Item"
// import { useEffect } from 'react';

const ItemList = ({items}) => {


    // useEffect(() => {
    //     fetch('./Data.json')
    //     .then(response => response.json())
    //     .then(respJSON => console.log(respJSON))
    //     .catch(error => console.log('Error: ', error))
    // }, [])

    //productos
    // let item1 = {id: 1,
    //              img :'https://s1.eestatic.com/2020/02/10/cocinillas/recetas/vegetarianas/recetas_veganas-hamburguesas-vegetarianas_466466296_144843568_1706x960.jpg',
    //              nombre : 'hamburguesa',
    //              plato : 'sandwich',
    //              stock : '5'
    //             };
    // let item2 = {id: 2,
    //              img :'https://www.lagloriavegana.com/wp-content/uploads/2016/04/falafelfrito.jpg',
    //              nombre : 'falafels',
    //              plato : 'al plato',
    //              stock : '3'
    //             };
    // let item3 = {id: 3,
    //              img :'https://i.pinimg.com/564x/84/6e/dd/846edd90f5101de6fd2b12929deaf330.jpg',
    //              nombre : 'milanesa',
    //              plato : 'al plato',
    //              stock : '10'
    //             };    

    // //array de productos                
    // const items = [item1, item2, item3];

   
    //mapeo del array guardado en la variable products para pasar en la lista
    let products = items.map( (items)=> 
                <div key={items.id} >
                    <Item
                       id = {items.id}
                       img = {items.img}
                       nombre = {items.nombre}
                       stock = {items.stock}
                       plato = {items.plato}
                    />
                </div>
    )
    

    return (
        <div className= "itemsList">
            
            { products }

        </div>
    )
}

export default ItemList
