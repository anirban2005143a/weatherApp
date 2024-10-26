import React, { useState } from 'react'
import Hero from './hero'
import Loader from '../utiles/Loader'
import Navbar from '../utiles/Navbar'

const Home = () => {

    const [isImagesLoaded, setisImagesLoaded] = useState(false)
    console.log(isImagesLoaded)

    return (
        <>
            {!isImagesLoaded && <Loader />}
            {isImagesLoaded && <Navbar />}
            <Hero setisImagesLoaded={setisImagesLoaded} isImagesLoaded={isImagesLoaded} />
        </>
    )
}

export default Home