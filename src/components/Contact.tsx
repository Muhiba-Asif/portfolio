import React from 'react'
import { RiMailStarLine } from "react-icons/ri";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl' data-aos="zoom-in-up">GET IN TOUCH</h2>
          <p className='text-gray-950 text-[18px] pt-2 font-bold' data-aos="zoom-in-up">
            Drop me a line , give me a call ,or send me a message by submitting the form.
          </p>
          <div className='flex gap-3 items-center font-black' data-aos="zoom-in-up">
            <RiMailStarLine  size={30}/> mahi@gmail.com
          </div>
          <div className='flex gap-3 items-center font-black' data-aos="zoom-in-up">
            <BsFillTelephoneInboundFill   size={30}/> (021) 442-4430
          </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text"
            className='h-[40px] bg-blue-400 border-black'
            id='name'/>
          </div>
      
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text"
            className='h-[40px] bg-blue-400 border-black'
            id='email'/>
          </div>
          
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea 
            className=' bg-blue-400 border-black'
            id='msg' rows={8}>
            </textarea>
          </div>
          <button className='bg-pink-500 p-2 px-6' data-aos="zoom-in-up" >Send</button>
        </div>
      </div>
    </div>
  )
}
export default Contact
