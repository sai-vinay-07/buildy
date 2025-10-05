import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import ListProject from './pages/admin/ListProject'
import Login from './pages/Login'
import AddProject from './pages/admin/AddProject'
import 'quill/dist/quill.snow.css'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContent'   // ✅ check filename

// ✅ PrivateRoute wrapper
const PrivateRoute = ({ children }) => {
  const { token } = useAppContext()
  return token ? children : <Login />
}

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/project/:id' element={<Project />} />
        <Route path='/login' element={<Login/>}/>
        {/* Admin Routes (Protected) */}
        <Route
          path='/admin'
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path='add-project' element={<AddProject />} />
          <Route path='list-project' element={<ListProject />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
