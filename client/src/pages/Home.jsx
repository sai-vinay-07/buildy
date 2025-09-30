import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
import NewsLetter from '../components/NewsLetter'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <ProjectList/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
