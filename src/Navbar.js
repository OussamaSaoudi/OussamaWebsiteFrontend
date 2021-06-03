import React from 'react'
import {
  Link
} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='max-w-7xl md:flex md:flex-row flex-navbar md:h-full'>
        <div className="md:w-20 md:flex-col text-gray-700 topography" x-data='{ open: false}'>
          <nav className='md:sticky md:top-0 md:block'>

            <div className="block bg-amber-300 py-5 py-4 uppercase tracking-wide text-white font-bold">
              <Link to="/">Home</Link>
            </div>

            <span className="block hover:bg-purple-400 py-5 py-4 uppercase tracking-wide text-white font-bold">
              <Link to="/blog">Blog</Link>
            </span>

            <span className="block hover:bg-purple-400 py-5 py-4 uppercase tracking-wide text-white font-bold">
              <Link to="/users">Get in Touch</Link>
            </span>

          </nav>
        </div>
      </div>
    </div>
  )
}
export default Navbar
