import React, { useState, useMemo } from 'react'
import { project_data, projectsCategories } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { useAppContext } from '../context/AppContent'

const ProjectList = () => {
  const [menu, setMenu] = useState('All')
  const { projects: contextProjects, input, setInput } = useAppContext()

  // Use context projects OR fallback dummy data
  const projects = contextProjects.length > 0 ? contextProjects : project_data

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesInput =
        input === '' ||
        project.title.toLowerCase().includes(input.toLowerCase()) ||
        project.category.toLowerCase().includes(input.toLowerCase())

      const matchesCategory = menu === 'All' || project.category === menu

      return matchesInput && matchesCategory
    })
  }, [projects, input, menu])

  const handleClear = () => {
    setMenu('All')
    setInput('') // clear the search input
  }

  return (
    <div>
      {/* Show Clear Button only if search input is active */}
      {input !== '' && (
        <div className="flex justify-center my-4">
          <button
            onClick={handleClear}
            className="px-4 py-1 text-sm bg-red-400 text-white rounded-full hover:bg-red-600 transition"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 my-10 relative">
        {projectsCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`relative z-10 cursor-pointer px-4 py-1 rounded-full transition 
                ${menu === item ? 'text-white' : 'text-gray-500'}`}
            >
              {item}
            </button>
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

      {/* Project Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40"
        layout
      >
        <AnimatePresence>
          {filteredProjects.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full text-center text-gray-500"
            >
              No projects found 🚀
            </motion.p>
          ) : (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default ProjectList
