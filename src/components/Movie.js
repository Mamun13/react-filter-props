import React from 'react'
import { useState } from 'react'
import Cards from './Card/Cards'
import CartApi from "../CartApi"


const Movie = () => {
    const [movieData, setmovieData] = useState(CartApi);

    return (
        <>
            <section id='card'>
                <div className="container">
                    <div className="row ">
                        <Cards moviData={movieData} />
                    </div>
                </div>
        </section>
        </>
    )
}

export default Movie