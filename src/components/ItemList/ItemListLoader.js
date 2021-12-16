import React from 'react'
import Item from './Item'
import { Spinner } from 'reactstrap'

const ItemListLoader = () => {
    return (
        <>
            <div className='ui grid' >
                {
                    [...new Array(3)].map((_, index)=>(
                        <div className='four wide comuns' key={index}>
                            
                            {/* <h2>Hola</h2> */}
                            <Spinner/>
                            <Item item={{
                                id:0,
                                tittle:'Cargando...',
                                thumbnail: 'https://c.tenor.com/pgO8hZgOW5AAAAAC/loading-bar.gif',
                                price:'',
                                categoryId:''
                            }}   
                            
                            />
                        </div>
                    ) )
                }
            </div>
        </>
    )
}

export default ItemListLoader
