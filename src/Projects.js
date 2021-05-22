import React from 'react'
import Project from './Project'
const Projects = () => {
  const projectList = [
    {
      title: 'Orate-io',
      content: ''
    },
    {
      title: 'Labyrinth',
      content: ''
    },
    {
      title: 'Personal Website',
      content: ''
    },
    {
      title: 'OpenJ9',
      content: ''
    },
    {
      title: 'Autonomous Vehicles',
      content: ''
    }
  ]
  return (
    <div>
      <h3>Here&apos;s some of my work:</h3>
      <ul>
        {
          projectList.map((project, index) =>
            <li key={index}><Project title={project.title} /></li>
          )
        }
      </ul>
    </div>
  )
}
export default Projects