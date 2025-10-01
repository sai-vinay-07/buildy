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
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project/:id' element={<Project />} />
      
      {/* Admin Routes */}
      <Route path='/admin' element={ true ? <Layout /> : <Login/>}>
        <Route index element={<Dashboard />} />
        <Route path='add-project' element={<AddProject />} />
        <Route path='list-project' element={<ListProject />} />
      </Route>
    </Routes>
  )
}

export default App
