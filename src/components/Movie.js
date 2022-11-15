import React from 'react'
import "../components/Movie.scss"
import { useState } from 'react'
import Cards from './Card/Cards'
import CartApi from "../CartApi"
import Search from './searchBar/Search'
// import { Link } from "react-router-dom";



const Movie = () => {
    const [movieData, setmovieData] = useState(CartApi);

    const filterItem = (category) => {
        const updatedList = CartApi.filter((curElem) => {
            return curElem.category === category;
        });
        setmovieData(updatedList);
    }
    return (
        <>
            <header>
                <div className="col-lg-3 filter pt-3">
                    <div className="nav-item text-center bg-secondary p-4 rounded-pill">
                    <button 
                        className=' color border-0 fs-5 bg-transparent text-uppercase fw-bold'
                        onClick={()=>setmovieData(CartApi)}
                        >
                            All
                        </button>
                        <button 
                        className='border-0 bg-transparent fs-5 color text-uppercase fw-bold'
                        onClick={()=>filterItem("marvel")}
                        >
                            Marvel
                        </button>
                        <button 
                        className='border-0 fs-5 bg-transparent color text-uppercase fw-bold'
                        onClick={()=>filterItem("dc")}
                        >
                            DC</button>
                        {/* <ul className='list-group ps-5 fw-bold list-group-horizontal list-unstyled ps-2 text-center'>
                            <Link to="#" onClick={() => filterItem("rock")} className=' txt-hover text-decoration-none text-light text-uppercase'>
                                <li className='pe-4'>Marvel</li>
                            </Link>
                            <Link to="#" className='text-decoration-none text-light text-uppercase txt-hover '>
                                <li className='pe-4'>DC</li>
                            </Link>
                            <Link to="#" className='text-decoration-none text-light text-uppercase txt-hover '>
                                <li className='pe-4'>Loki</li>
                            </Link>
                        </ul> */}
                    </div>
                </div>
            </header>
            <Search/>
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