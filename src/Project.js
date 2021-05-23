import React from 'react'
import PropTypes from 'prop-types'
const Project = ({ title, content, tags }) => {
  return (
    <div className='sm:my-6 sm:mx-4 md:mx-8 lg:ms-12'>
      <div className='w-full mx-4 pb-5 sm:px-6 md:px-8 sm:rounded-xl bg-gray-50 sm:shadow-md'>
        <div className="uppercase tracking-wide text-lg  pt-5 text-purple-700 font-bold">{title}</div>
        <div className="text-justify text-gray-600">{content}</div>
        <div className='pt-2'>
          {tags.map((tag,index) => (
            <span key={index} className='inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded'>
              {tag}
            </span>
          )
          )}
        </div>
      </div>
    </div>
  )
}
Project.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
}
export default Project