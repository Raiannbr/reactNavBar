import React from 'react'
// import { Card, Image } from 'semantic-ui-react'
// import ItemCount from '../ItemCount/ItemCount'

import ItemList from '../../components/ItemList/ItemList'
import { useState, useEffect } from 'react'
// import ItemListLoader from '../ItemList/ItemListLoader'

import {Spinner} from 'reactstrap'

import {db} from '../../Firebase/firebaseConfig'
import {collection, query, getDocs, where} from 'firebase/firestore'
// function ItemListContainer({categoryId} ) {

function Platos() {

    const [plato, setPlato] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        const getProducts = async ()=> {
            //asincronia de fire base, para sacar los productos
            const q = query ( collection (db, "items"),where('category', '==' , 'plato' ))
            const docs = []
            const querySnapshot = await getDocs(q)
            setLoading(false)
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
            } );
            setPlato(docs);
        };
        getProducts();
    },[])
    return (
        <div className="Container">            
            {
                loading ?
                // <ItemListLoader/> 
                <Spinner color="success"
                type="grow">
                Loading...
                </Spinner>
                :
                <div className='itemsContainerList'>
                    <ItemList
                    item = {plato}
                    />
                </div>
            }
        </div>
    )
}

export default Platos
