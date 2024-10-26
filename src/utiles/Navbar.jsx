import React from 'react'

const Navbar = () => {
  return (
    <nav id='navbar' className=' flex justify-between items-center w-[100vw] absolute z-50 text-white'>
        <div className=' text-2xl font-bold py-2 px-4'>Weather</div>
        <div className="menus flex justify-center items-center gap-3 text-sm font-light p-4 mx-4 ">
            <div className=' hover:border-b-[1px] border-white cursor-pointer'>Home</div>
            <div className=' hover:border-b-[1px] border-white cursor-pointer'>About</div>
            <div className=' hover:border-b-[1px] border-white cursor-pointer'>Contact</div>
        </div>
    </nav>
  )
}

export default Navbar