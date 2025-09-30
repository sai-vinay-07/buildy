import React, { useState } from 'react'
import { project_data, projectsCategories } from '../assets/assets'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const ProjectList = () => {
  const [menu, setMenu] = useState('All')

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {projectsCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`relative z-10 cursor-pointer px-4 py-1 rounded-full transition 
                ${menu === item ? 'text-white' : 'text-gray-500'}`}
            >
              {item}
            </button>

            {/* Animated Blue background */}
            {menu === item && (
              <motion.div
                layoutId="underline"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute inset-0 bg-blue-700 rounded-full z-0"
              />
            )}
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
        {project_data.filter((project)=> menu === "All" ? true : project.category === menu)
        .map((project)=><ProjectCard key={project._id} project={project}/>)}
      </div>
    </div>
  )
}

export default ProjectList
