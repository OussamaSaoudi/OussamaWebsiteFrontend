import React from 'react'
import PropTypes from 'prop-types'
const Project = ({ title, content }) => {
  return (
    <div>
      {title}
      {content}
    </div>
  )
}
Project.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
}
export default Project