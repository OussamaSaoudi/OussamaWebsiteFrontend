import React from 'react'

const Projects = () => {
  const projectList = [
    {
      title: 'Orate-io'
    },
    {
      title: 'Labyrinth'
    },
    {
      title: 'Personal Website'
    },
    {
      title: 'OpenJ9'
    },
    {
      title: 'Autonomous Vehicles'
    }
  ]
  return (
    <div>
      <h3>Here&apos;s some of my work:</h3>
      <ul>
        {
          projectList.map((project, index) =>
            <li key={index}>{project.title}</li>
          )
        }
      </ul>
    </div>
  )
}
export default Projects