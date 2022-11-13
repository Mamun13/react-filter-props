import React from 'react'
import Navbar from '../components/AppModule/Navbar'
import Movie from '../components/Movie'

const Home = () => {
    return (
        <>
            <section id='background'className=''>
                <Navbar />
                <Movie />
            </section>
        </>
    )
}

export default Home