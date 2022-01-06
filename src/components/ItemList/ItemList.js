import React from 'react'
import Item from "./Item"
// import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react'

const ItemList = ({item}) => {

    //mapeo del array guardado en la variable products para pasar en la lista
    let products = item.map( (item)=> 
                <div key={item.id} >
                    <Item
                        item = {item}
                    />
                </div>
    )
    return (
        <div >
            <Grid columns={3} divided>
                

                     { products }

                
            </Grid>

        </div>
    )
    
}

export default ItemList
