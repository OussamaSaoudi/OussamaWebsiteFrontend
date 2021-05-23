import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Blog from './Blog'

function App() {
  return (
    <div className='flex bg-gray-900'>
      <div className='flex md:flex-row flex-navbar md:min-h-screen'>
        <div className="flex-col md:w-20 text-gray-700 topography" x-data='{ open: false}'>
          <div className=''>
          </div>
          <nav className='sticky top-0 flex md:block md:overflow-y-auto'>
            <div className="block bg-amber-300 py-5 py-4 uppercase tracking-wide text-white font-bold">
              Link1
            </div>
            <span className="block py-5 py-4 uppercase tracking-wide text-white font-bold">
              Link2
            </span>
            <span className="block hover:bg-purple-400 py-5 py-4 uppercase tracking-wide text-white font-bold">
              Link3
            </span>

          </nav>
        </div>
      </div>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/blog'>
              <Blog />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>

  )
}

export default App
