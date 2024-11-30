import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";


const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-bold text-purple-600'>@Mahi</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex text-xl font-medium'>
            <li className='menuLink' ><a href= '#hero'>Home</a></li>
            <li className='menuLink'><a href='#about'>About</a></li>
            <li className='menuLink'><a href='#projects'>Projects</a></li>
            <li className='menuLink'><a href='#skills'>Skills</a></li>
            <li className='menuLink'><a href='#contact'>Contact</a></li>
            
            
        </ul>
        <TfiMenuAlt className='sm=show' size={30}  />
      </div>
    </div>
  )
}

export default Navbar
