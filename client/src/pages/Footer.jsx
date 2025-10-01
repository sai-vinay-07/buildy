import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32  bg-blue-50 w-full">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
          
          {/* Logo + About */}
          <div className="max-w-96">
            <img src={assets.buildy_logo} className='w-45 h-14' alt="Project Hub Logo" />
            <p className="mt-6 text-base text-gray-500">
              ProjectHub helps students discover beginner to advanced project ideas across domains like MERN, ML, Data Science, Cloud, and more. Build your skills with curated features, repos, and tutorials.
            </p>
            <div className="flex items-center gap-5 mt-3">
              <a href="#">
                {/* Twitter */}
                <svg width="25" height="25" viewBox="0 0 20 20" fill="none">
                  <path d="M19.167 2.5a9.1 9.1 0 0 1-2.617 1.275 3.733 3.733 0 0 0-6.55 2.5v.833a8.88 8.88 0 0 1-7.5-3.775s-3.333 7.5 4.167 10.833a9.7 9.7 0 0 1-5.834 1.667C8.333 20 17.5 15.833 17.5 6.25q0-.35-.067-.692A6.43 6.43 0 0 0 19.167 2.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#">
                {/* GitHub */}
                <svg width="25" height="25" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15.833c-4.167 1.25-4.167-2.084-5.833-2.5m11.666 5v-3.225a2.8 2.8 0 0 0-.783-2.175c2.616-.292 5.366-1.283 5.366-5.833a4.53 4.53 0 0 0-1.25-3.125 4.22 4.22 0 0 0-.075-3.142s-.983-.292-3.258 1.233a11.15 11.15 0 0 0-5.833 0C5.225.541 4.242.833 4.242.833a4.22 4.22 0 0 0-.075 3.142 4.53 4.53 0 0 0-1.25 3.15c0 4.516 2.75 5.508 5.366 5.833a2.8 2.8 0 0 0-.783 2.15v3.225" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#">
                {/* LinkedIn */}
                <svg width="25" height="25" viewBox="0 0 20 20" fill="none">
                  <path d="M13.333 6.667a5 5 0 0 1 5 5V17.5H15v-5.833a1.667 1.667 0 0 0-3.334 0V17.5H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5zM3.333 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
            <div>
              <h2 className="font-semibold text-xl text-gray-900 mb-5">EXPLORE</h2>
              <ul className="text-base text-gray-500 space-y-2 list-none">
                <li><a href="#">Frontend Projects</a></li>
                <li><a href="#">Backend Projects</a></li>
                <li><a href="#">MERN Stack</a></li>
                <li><a href="#">Machine Learning</a></li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 text-xl mb-5">SUPPORT</h2>
              <ul className="text-base text-gray-500 space-y-2 list-none">
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contribute Ideas</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Community Forum</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} ProjectHub. Empowering students to build real-world projects. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
