import React, { useState, useEffect } from 'react'
import Navbar from '../utiles/Navbar'
import '../index.css'

const Hero = (props) => {


    const [bgImg1, setbgImg1] = useState(null)
    const [bgImg2, setbgImg2] = useState(null)
    const [bgImg3, setbgImg3] = useState(null)
    const [bgImg4, setbgImg4] = useState(null)

    useEffect(() => {
        let img1 = new Image()
        img1.src = "/noaa-VRf6c6h9lRg-unsplash.jpg"
        img1.onload = () => {
            setbgImg1("/noaa-VRf6c6h9lRg-unsplash.jpg")
            img1.src = "/istockphoto-516351793-612x612.webp"
            img1.onload = () => {
                setbgImg2("/istockphoto-516351793-612x612.webp")
                img1.src = "/noaa-zdj3p00Rep0-unsplash.jpg"
                img1.onload = () => {
                    setbgImg3("/noaa-zdj3p00Rep0-unsplash.jpg")
                    img1.src = "/ries-bosch-i7RMkEVyCmM-unsplash.jpg"
                    img1.onload = () => {
                        setbgImg4("/ries-bosch-i7RMkEVyCmM-unsplash.jpg")
                        props.setisImagesLoaded(true)
                    }
                }
            }
        }

    }, [])



    return (
        <div id='hero' className={` relative ${props.isImagesLoaded ? '' : 'hidden'}`}>
            {/* <Navbar /> */}
            <div className=" w-[100vw] h-[100vh] overflow-hidden">
                <div className=' slide w-[400%] h-full flex'>

                    <div className='slide1 w-1/4 h-full bg-cover bg-blend-hard-light  bg-[rgba(0,0,0,0.6)] text-white flex justify-center items-center ' style={{ backgroundImage: `url(${bgImg1})` }}>
                        <div className='content text-center backdrop-blur-md bg-[rgba(175,64,64,0.1)] md:w-7/12 w-10/12 md:px-6 sm:px-3 px-2 md:py-8 sm:py-6 py-4 border-[1px] border-white rounded-xl'>
                            <h1 className='text-5xl font-bold my-8'>Forecast</h1>
                            <p className='text-base font-normal my-4 md:px-6 px-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id porro a, doloremque at reprehenderit est magnam iusto, natus dolorum fuga sapienteLorem ipsum dolor sit, amet consectetur adipisicing elit. Id porro a, doloremque at reprehenderit est magnam iusto, natus dolorum fuga sapiente </p>
                        </div>
                    </div>
                    <div className='slide1 w-1/4 h-full bg-cover bg-blend-hard-light  bg-[rgba(0,0,0,0.6)] text-white flex justify-center items-center' style={{ backgroundImage: `url(${bgImg2})` }}>
                        <div className='content text-center backdrop-blur-md bg-[rgba(175,64,64,0.1)] md:w-7/12 w-10/12 md:px-6 sm:px-3 px-2 md:py-8 sm:py-6 py-4 border-[1px] border-white rounded-xl'>
                            <h1 className='text-5xl font-bold my-8'>Forecast</h1>
                            <p className='text-base font-normal my-4 md:px-6 px-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id porro a, doloremque at reprehenderit est magnam iusto, natus dolorum fuga sapienteLorem ipsum dolor sit, amet consectetur adipisicing elit. Id porro a, doloremque at reprehenderit est magnam iusto, natus dolorum fuga sapiente </p>
                        </div>
                    </div>
                    <div className='slide1 w-1/4 h-full bg-cover bg-blend-hard-light  bg-[rgba(0,0,0,0.6)] text-white flex justify-center items-center' style={{ backgroundImage: `url(${bgImg3})` }}>
                        <div className='content text-center backdrop-blur-md bg-[rgba(175,64,64,0.1)] md:w-7/12 w-10/12 md:px-6 sm:px-3 px-2 md:py-8 sm:py-6 py-4 border-[1px] border-white rounded-xl'>
                            <h1 className='text-5xl font-bold my-8'>Forecast</h1>
                            <p className='text-base font-normal my-4 md:px-6 px-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id porro a, doloremque at reprehenderit est magnam iusto, natus dolorum fuga sapienteLorem ipsum dolor sit, amet consectetur adipisicing elit. Id porro a, doloremque at reprehenderit est magnam iusto, natus dolorum fuga sapiente </p>
                        </div>
                    </div>
                    <div className='slide1 w-1/4 h-full bg-cover bg-blend-hard-light  bg-[rgba(0,0,0,0.6)] text-white flex justify-center items-center' style={{ backgroundImage: `url(${bgImg4})` }}>
                        <div className='content text-center backdrop-blur-md bg-[rgba(175,64,64,0.1)] md:w-7/12 w-10/12 md:px-6 sm:px-3 px-2 md:py-8 sm:py-6 py-4 border-[1px] border-white rounded-xl'>
                            <h1 className='text-5xl font-bold my-8'>Forecast</h1>
                            <p className='text-base font-normal my-4 md:px-6 px-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id porro a, doloremque at reprehenderit est magnam iusto, natus dolorum fuga sapienteLorem ipsum dolor sit, amet consectetur adipisicing elit. Id porro a, doloremque at reprehenderit est magnam iusto, natus dolorum fuga sapiente </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero