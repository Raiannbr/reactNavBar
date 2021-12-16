// import React, { useEffect, useState } from 'react'

// import ItemDetailContainer from "../components/ItemDetail/ItemDetailContainer"
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Category = () => {

    const params = useParams();

    
    console.log(params.id)
    return (
        <div>
            <div className="row row-cols-sm-1" >
                <div className="col d-flex">
                <ItemListContainer
                    categoryId = {params.categoryId}
                />
                </div>
            </div>
        </div>
    )
}

export default Category
