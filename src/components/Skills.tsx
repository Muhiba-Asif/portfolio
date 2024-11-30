import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div >
          <h2  data-aos="zoom-in-up" className='text-8xl md:text-5xl '>Technologies I Work With</h2>
          <p  className='text-blue-800 pt-5 font-bold'>
            I have a solid foundation in web development , specializing in HTML,CSS,and JAVASCRIPT . My experience extends to using 
            frameworks like React and Next.js to create dynamic and user-friendly application. I'm also proficient in Tailwind CSS for 
            efficient styling and design. With a passion for learning. I stay updated on the latest Technologies to enchance my skill set and contribute efficiently to projects. 
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>

            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
