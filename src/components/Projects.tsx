
import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & TypeScript based app for managing and organizing  your tasks efficiently .",
        img: "/Todo list.png",
        tags: ["React","Node","CSS","Typescript"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js & TypeScript powered website to track time with an interactive countdown feature .",
        img: "/Countdown timer .png",
        tags: ["Next.js","Node","CSS","Typescript"],
    },
    {
      id: 2,
      title: "Weather Widget",
      desc: "A Next.js & TypeScript based tool for fetching and displaying real-time weather data .",
      img: "/Weather widget.png",
      tags:  ["Next.js","Node","CSS","Typescript"],
    },
    {
      id: 3,
      title: "Currency Converter",
      desc: "A Simple Html & TypeScript powered tool for converts amounts from one currency to two others .",
      img: "/Currency converter.png",
      tags:  ["Html","Node","CSS","Typescript"],
    },
    {
      id: 4,
      title: "Simple Calculator",
      desc: "A basic Html & TypeScript calculator for performing essential arithmetic operations .",  
      img: "/Project_04.png",
      tags:  ["Html","Node","CSS","Typescript"],
    },
    {
      id: 5,
      title: "Adventure Game",
      desc: "A simle Html & TypeScript based tool for performing adventure in game .",
      img: "/Project_05.png",
      tags:  ["Html","Node","CSS","Typescript"],
    },
];

const Projects = () => {
  return (
    <div id='projects'className='container pt-32'>
      <Heading title='My Projects ' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center '>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
      
    </div>
  )
}

export default Projects
