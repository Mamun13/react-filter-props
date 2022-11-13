import React from 'react'
import "../AppModule/Navbar.scss"
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <header>
                <div className="col-lg-3 filter pt-3">
                    <div className="nav-item text-center bg-secondary p-4 rounded-pill">
                        <ul className='list-group ps-5 list-group-horizontal list-unstyled ps-2 text-center'>
                            <Link to="#" className='text-decoration-none text-light text-uppercase'>
                                <li className='pe-4'>Rock</li>
                            </Link>
                            <Link to="#" className='text-decoration-none text-light text-uppercase'>
                                <li className='pe-4'>Stark</li>
                            </Link>
                            <Link to="#" className='text-decoration-none text-light text-uppercase'>
                                <li className='pe-4'>Loki</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar