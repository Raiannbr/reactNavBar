import React, { createContext, useState } from "react";

//1 crear contexto
export const ItemContext = createContext();


const ItemsProd = [
    {id:01, name:"algo", price:600},
    {id:02, name:"alguien", price:500},
    {id:03, name:"algunos", price:700},
]

//2 Crear el componenete provider (ItemProvider)
export const ItemsProvider = () => {
    const [items, setItems] = useState(ItemsProd);

    //3 retornamos nuestro context con un .provider
    return <ItemContext.Provider>
        {/* 4- props del context */}
        {props.children} </ItemContext.Provider>

}