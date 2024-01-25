import React, { useContext } from 'react'
import  './Home.css';


export default function UserCard({ title, imgs,des, price }) {

    
    return (

        <>
              <div className='cntr'>
                <img src={imgs} className="card-img-top img-fluid img-width mt-2" alt="..." />
                <div className={"card-body"}>
                    <h5 className={"card-title text-dark ln"}>{title}</h5>
                    <h3 className={"card-text text-dark ln"}>${price}</h3>
                </div>
             </div>  
        </>

    )
}