import React from 'react'
import {
  Link
} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>

        <span>
          <Link to="/blog">Blog</Link>
        </span>

        <span >
          <Link to="/users">Get in Touch</Link>
        </span>

      </nav>
    </div>
  )
}
export default Navbar
