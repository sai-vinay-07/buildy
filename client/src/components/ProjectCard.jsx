import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DiGithubBadge } from 'react-icons/di'
import { FaYoutube } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  const { _id, title, description, features, category, image, repoLink, videoLink, difficulty } = project
  const navigate = useNavigate()

  // Remove any HTML tags from description
  const cleanDescription = description.replace(/<\/?[^>]+(>|$)/g, "")

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

      {/* Title + Clean Description */}
      <div className="px-4 pb-5">
        <h5 className="mb-2 font-semibold text-lg text-gray-900 line-clamp-1">
          {title}
        </h5>
        <p className="text-sm text-gray-600 line-clamp-2">
          {cleanDescription}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
