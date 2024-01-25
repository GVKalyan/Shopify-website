import React from 'react'
import { useLocation } from 'react-router-dom'
import './Home.css';
export default function User() {

    const { state } = useLocation()



    return (
        <>
            <div className='container-fluid'>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card cntr effect ms-5">
                            <img src={state.image}class="card-img-top img-fluid img-width mt-2" alt="..."/>
                                <div class="card-body m-5">
                                    <h4 class="card-text text-size">{state.title}</h4>
                                     <br></br>
                                    <h5 class="card-text text-size">{state.description}</h5>
                                    <br></br>
                                    <h2 class="card-text text-size text-success cntr">${state.price}</h2>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
