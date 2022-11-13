import React from 'react'
import { Link } from 'react-router-dom'


const Cards = ({ moviData }) => {
    // console.log(moviData)
    return (
        <>
            {moviData.map((curElement) => {
                return (
                    <>
                        <div className="col-lg-4 d-flex justify-content-center">
                            <Link to="" className='text-decoration-none mt-5'>
                                <div class="card card-one " style={{ width: "18rem" }}>
                                    <img src={curElement.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h4 className='text-dark'>{curElement.name}</h4>
                                        <p class="card-text text-secondary">{curElement.category}</p>
                                        <p class="card-text text-secondary f-3">{curElement.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </>
                )
            })}

        </>
    )
}

export default Cards