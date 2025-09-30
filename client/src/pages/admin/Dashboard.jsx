import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import ProjectTableItem from './ProjectTableItem'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    projects: 0,
    recentProjects: []
  })

  const fetchDashboard = async () => {
    // TODO: Replace with backend API call
    setDashboardData({
      projects: 3,
      recentProjects: [
        {
          _id: "001",
          title: "Portfolio Website",
          createdAt: new Date(),
          isPublished: true,
        },
        {
          _id: "002",
          title: "Blog API",
          createdAt: new Date(),
          isPublished: false,
        }
      ]
    })
  }

  useEffect(() => {
    fetchDashboard()
  }, [])

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      {/* Stats Section */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:scale-105 transition">
          <img src={assets.dashboard_icon_1} alt="Projects" />
          <div>
            <p className="text-xl font-semibold text-gray-700">
              {dashboardData.projects}
            </p>
            <p className="text-gray-500">Projects</p>
          </div>
        </div>
      </div>

      {/* Latest Projects */}
      <div className="mt-8">
        <div className="flex items-center gap-3 mb-4 text-gray-700">
          <img src={assets.dashboard_icon_4} alt="Latest Projects" />
          <p className="text-lg font-medium">Latest Projects</p>
        </div>

        <div className="relative max-w-5xl overflow-x-auto shadow rounded-lg bg-white">
          <table className="w-full text-sm text-gray-600 border-collapse">
            <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
              <tr>
                <th className="px-6 py-3 text-left w-12">#</th>
                <th className="px-6 py-3 text-left">Project Title</th>
                <th className="px-6 py-3 text-left max-sm:hidden">Date</th>
                <th className="px-6 py-3 text-center max-sm:hidden">Status</th>
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentProjects.map((project, index) => (
                <ProjectTableItem
                  key={project._id}
                  project={project}
                  fetchProjects={fetchDashboard}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
