import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import Blogs from './Blogs'

function App() {
  return (
    <Router>
      <Navigation />
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
    </Router>

  )
}

export default App
