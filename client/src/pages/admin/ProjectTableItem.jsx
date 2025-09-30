import React from 'react'
import { assets } from '../../assets/assets'

const ProjectTableItem = ({ project, fetchProjects, index }) => {
  const { title, createdAt, isPublished } = project
  const projectDate = new Date(createdAt)

  return (
    <tr className="border-t border-gray-200 hover:bg-gray-50 transition">
      <td className="px-6 py-4 text-gray-600">{index}</td>
      <td className="px-6 py-4 font-medium text-gray-700">{title}</td>
      <td className="px-6 py-4 max-sm:hidden">{projectDate.toDateString()}</td>
      <td className="px-6 py-4 max-sm:hidden text-center">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            isPublished
              ? "bg-green-100 text-green-600"
              : "bg-orange-100 text-orange-600"
          }`}
        >
          {isPublished ? "Published" : "Unpublished"}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={() => {
              // toggle publish/unpublish logic
              fetchProjects()
            }}
            className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            {isPublished ? "Unpublish" : "Publish"}
          </button>
          <button
            onClick={() => {
              // delete logic
              fetchProjects()
            }} className=' hover:scale-110 transition-all'  >
            <img
              src={assets.cross_icon}
              alt="Delete"
              className="w-4 h-4"
            />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default ProjectTableItem
