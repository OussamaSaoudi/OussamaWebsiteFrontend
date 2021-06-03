import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Blogs from './Blogs'

function App() {
  return (
    <Router>
      <div className='flex bg-gray-900'>
        <Navbar />
        <div>
          <Switch>
            <Route path='/blog'>
              <Blogs />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  )
}

export default App
