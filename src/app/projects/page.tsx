
// pages/projects.tsx
import React from 'react';

const projects = [
  {
    title: 'Project 1: Biryani Website',
    image: '/images/new.jpg', 
    description: 'A simple biryani recipe website with animations using html and css.',
    link: 'https://github.com/Syedaashnaghazanfar/syeda_biryani',
  },
  {
    title: 'Project 2: Resume Builder',
    image: '/images/resume.png',
    description: 'Dynamic resume builder with customizable sections.',
    link: 'https://syeda-static-resume.vercel.app/index2.html',
  },
  {
    title: 'Project 3: Contact Me',
    image: '/images/contact.png',
    description: 'A contact me page using html and css.',
    link: 'https://github.com/Syedaashnaghazanfar/contact-me-page',
  },
  {
    title: 'Project 4: Wishlist Cute App',
    image: '/images/wishlist.png',
    description: 'A cute wishlist app with the functionality of adding and removing wishes.',
    link: 'https://cute-wishlist-application.vercel.app/',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-10 ">
      <h1 className="text-7xl font-bold text-white mb-10 ml-10px">My Projects</h1>
      
      <div className="w-full max-w-4xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-6 hover:bg-gray-700 transition-all duration-300 border-2"
          >
            <div className="flex items-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-1/3 h-48 object-cover hover:opacity-75 transition-opacity duration-300"
              />
              <div className="p-6 w-2/3">
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">{project.title}</h2>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
       <button className='bg-yellow-300 text-black border-2 p-5 rounded ml-[400px] hover:bg-yellow-200 hover:scale-105 transition-transform duration-200'>
         <a href="https://github.com/Syedaashnaghazanfar/" target='_blank'>More Projects</a>
      </button>
         </div>
    </div>
  );
}
