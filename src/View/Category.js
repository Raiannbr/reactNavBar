import React from 'react'

// import ItemDetailContainer from "../components/ItemDetail/ItemDetailContainer"
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'

const Category = () => {

    const params = useParams();

    // params.id

    console.log(params.plato)
    return (
        <div>
            <div className="row row-cols-sm-1" >
                <div className="col d-flex">
                <ItemListContainer
                    categoryId = {params.plato}
                    
                
                />
                </div>
            </div>
        </div>
    )
}

export default Category
