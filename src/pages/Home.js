import React from 'react'
import "../pages/Home.scss"
import Navbar from '../components/AppModule/Navbar'
import Movie from '../components/Movie'

const Home = () => {
    return (
        <>
            <section id='background' className='bg-color'>
                <Navbar />
                <Movie />
            </section>
        </>
    )
}

export default Home