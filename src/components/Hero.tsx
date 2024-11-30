import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
   
  return (
<div>
<Navbar /> 

   <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/anime.png)]   bg-bottom lg:bg-[15%] bg-cover  '
    style={{backgroundSize: "30" , backgroundPosition: "center pxl 20"   }}
    >
      
     <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[80px] sm:text-[100px] font-serif leading-tight flex justify-items-center place-items-end text-white'>
        <div>
        <p  data-aos="zoom-in-up">I'm</p>
        <p data-aos="zoom-in-up">Muhiba Asif </p>
        
        </div>
      </div>
     </div>
    </div>
    </div>
  )
}

export default Hero
