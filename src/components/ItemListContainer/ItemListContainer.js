import React from 'react'
// import { Card, Image } from 'semantic-ui-react'
// import ItemCount from '../ItemCount/ItemCount'

import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
// import ItemListLoader from '../ItemList/ItemListLoader'

import {Spinner} from 'reactstrap'

import {db} from '../../Firebase/firebaseConfig'
import {collection, query, getDocs} from 'firebase/firestore'
// function ItemListContainer({categoryId} ) {

function ItemListContainer({categoryId} ) {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
        
    //     setLoading(true)
    //     setTimeout(()=> {
    //     // fetch(`./json/Data.json`)
    //     // .then(response => response.json())
    //     // .then(respJSON => {console.log(respJSON); setItem(respJSON); setLoading(false)})
    //     // .catch(error => console.log('Error: ', error))
    
    // },2000)
    // }, [categoryId])
    useEffect(()=>{
        setLoading(true)

        const getProducts = async ()=> {
            //asincronia de fire base, para sacar los productos
            const q = query ( collection (db, "items"))
        
            //array de productos 
            const docs = []
            const querySnapshot = await getDocs(q)
            // console.log( querySnapshot );
            setLoading(false)

            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});

            } );

            setItem(docs);
        };
        getProducts();
    
    },[])
    console.log('items',item);

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
                    item = {item}
                    />

                </div>
            }
        </div>
    )
}

export default ItemListContainer
