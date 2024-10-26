import React, { useState } from 'react'
import Hero from './hero'
import Loader from '../utiles/Loader'
import Navbar from '../utiles/Navbar'
import Main from './main'

const Home = () => {

    const [isImagesLoaded, setisImagesLoaded] = useState(false)
    console.log(isImagesLoaded)

    return ( 
        <>
            {!isImagesLoaded && <Loader />}
            {isImagesLoaded && <Navbar />}
            <Hero setisImagesLoaded={setisImagesLoaded} isImagesLoaded={isImagesLoaded} />
            {isImagesLoaded && <Main/>}
        </>
    )
}

export default Home