import React, { useState } from 'react'

const InputForm = () => {

    const [currLoc, setcurrLoc] = useState(false)

    return (
        <div id='inputForm'>
            <div className=' flex flex-col justify-center items-center'>
                <input type="text" name='place' disabled={currLoc} placeholder='Enter your place' className='inputPlace text-xl font-normal text-black ' />
                <div>
                    <input type="checkbox" name='current-location' id='current-location' onChange={(e) => {
                        setcurrLoc(e.currentTarget.checked)
                    }} />
                    <label htmlFor="current-location">Use my current location</label>
                </div>
            </div>


        </div>
    )
}

export default InputForm