import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

import { Spinner } from 'reactstrap'
import { useParams } from 'react-router-dom'

import { db } from '../../Firebase/firebaseConfig'
import { collection, query,  getDocs } from 'firebase/firestore'

const ItemDetailContainer = () => {

    
    // useEffect(() => {
        //     setLoading(true)
        //     setTimeout(()=> {
            
            //     fetch("/json/Data.json")
            //     .then(response => response.json())
            //     .then(respJSON => {console.log(respJSON); setItem(respJSON.filter(x =>x.id === params.id)); setLoading(false)})
            //     .catch(error => console.log('Error: ', error))
            
            
            // },2500)
            // }, [params.id])
            
            
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()
    useEffect(()=>{
        setLoading(true)
        const getProducts = async ()=> {
            //asincronia de fire base, para sacar los productos
            const q = query ( collection (db, "items"))
            const docs = []
            const querySnapshot = await getDocs(q)
            setLoading(false)
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
            } );
            setItem(docs.filter(x => x.id === params.id ));
            console.log(docs)
        };
        

        getProducts();
    },[params.id])
    
    
    return (
        <div>
            {
                loading ? 
                <Spinner color="secondary"
                type="grow">
                Loading...
                </Spinner>
                :
                <ItemDetail
                    item = {item}
                />
            }
        </div>
    )
}

export default ItemDetailContainer





// Buenas gente, paso el useEffect por si a alguien le interesa:
//  useEffect(() => {
//      const getProducts = async () =>{
//          const q = query(collection(db,'ItemCollection'), where(documentId(), '==', prodID));
//          const docs =[];
//          const querySnapshot = await getDocs(q);
//          querySnapshot.forEach((doc) => {
//              docs.push({ ...doc.data(), id:doc.id });
//          });
//          console.log('DATA', docs);
//          setItem(docs);
//          console.log(item)
//          setIsLoading(false);
//      };
//      getProducts();
//  }, [prodID])