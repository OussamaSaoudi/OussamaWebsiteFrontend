import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
  LinkContainer
} from 'react-router-bootstrap'

const Navigation = () => {
  return (
    <div>
      <Navbar bg='dark'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' >
          <Nav >
            <LinkContainer to='/'>
              <Nav.Link>
                Home
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/blog'>
              <Nav.Link>
                Blog
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/users'>
              <Nav.Link>
                Get In Touch
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default Navigation
