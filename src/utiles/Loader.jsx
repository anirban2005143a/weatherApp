import React from 'react'

const Loader = () => {
    return (
        <div className=' w-[100vw] h-[100vh] flex justify-center items-center '>
            <div className="spinner-border w-[100px] h-[100px] text-blue-800 " role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    )
}

export default Loader