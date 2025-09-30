import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DiGithubBadge } from 'react-icons/di'
import { FaYoutube } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  const { _id, title, features, category, image, repoLink, videoLink, difficulty } = project
  const navigate = useNavigate()

  return (
    <div 
      onClick={() => navigate(`/project/${_id}`)} 
      className="w-full rounded-lg overflow-hidden shadow hover:scale-[1.02] hover:shadow-lg duration-300 cursor-pointer bg-white"
    >
      {/* Image */}
      <img 
        src={image} 
        alt={title} 
        className="aspect-video object-cover"
      />

      {/* Category + Difficulty */}
      <div className="flex justify-between items-center px-4 pt-4 pb-2 text-xs">
        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium">
          {category}
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 font-medium">
          {difficulty}
        </span>
      </div>

      {/* Title + Features */}
      <div className="px-4 pb-5">
        <h5 className="mb-2 font-semibold text-lg text-gray-900 line-clamp-1">
          {title}
        </h5>
        <p className="text-sm text-gray-600 line-clamp-2">
          {features}
        </p>
      </div>

      {/* Links (Optional) */}
      {/* <div className="flex gap-4 px-4 pb-4">
        {repoLink && (
          <a 
            href={repoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-gray-900 text-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <DiGithubBadge />
          </a>
        )}
        {videoLink && (
          <a 
            href={videoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-red-500 hover:text-red-700 text-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <FaYoutube />
          </a>
        )}
      </div> */}
    </div>
  )
}

export default ProjectCard
