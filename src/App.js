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
  )
}

export default App
