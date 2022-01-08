import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

import { Spinner } from 'reactstrap'
import { useParams } from 'react-router-dom'

import { db } from '../../Firebase/firebaseConfig'
import { collection, query,  getDocs } from 'firebase/firestore'

const ItemDetailContainer = () => {
        
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const paramsID = useParams()


    const itemFilter = item.filter((filterID)=> { return filterID.id === paramsID.id})

    useEffect(()=>{
        setLoading(true)
        const getProducts = async ()=> {
            //asincronia de fire base, para sacar los productos
            const q = query ( collection (db, "items"))
            const docs = []
            const querySnapshot = await getDocs(q)
            setLoading(false)
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data()});
            } );
            setItem(docs);
        };
        getProducts();
    },[])

    return (
        <div>
            {
                loading ? 
                <Spinner color="secondary"
                type="grow">
                Loading...
                </Spinner>
                :
                itemFilter.map((dataItem) => {
                    return(
                        <ItemDetail
                            data = {dataItem}
                        />
                    )
                })
            }
        </div>
    )
}
export default ItemDetailContainer
