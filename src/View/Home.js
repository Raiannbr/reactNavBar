import React from 'react'

import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

export const Home = () => {
    return (
        <div>
            <div className="ItemListContainer" >
                <ItemListContainer
                
                />
            </div>
        </div>
        // <div>
        //     <div className="ItemListContainer" >
        //         <br /><br /><br />
        //         <h2 style={{textAlign: "left"}}>Platos</h2>
        //         <ItemListContainer categoryId="plato" />
        //         <br /><br /><br />
        //         <h2 style={{textAlign: "left"}}>Sandwiches</h2>
        //         <ItemListContainer categoryId="sandwich" />
        //     </div>
        // </div>
    )
}
export default Home
