import React from 'react'
import PropTypes from 'prop-types'
const Blog = ({ title, content, tags }) => {
  return (
    <div>
      {title}
      <div >{content}</div>
      {tags.map((tag,index) => (
        <span key={index}>
          {tag}
        </span>
      )
      )}
    </div>
  )
}
Blog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
}
export default Blog