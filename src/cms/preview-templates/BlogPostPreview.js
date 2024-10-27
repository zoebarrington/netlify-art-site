import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  if (!entry) {
    console.log('Entry is undefined'); // This will help to identify if entry is not passed
    return null; // Or render a loading state if needed
  }
  console.log(entry, "entry"); // Add this line to inspect the entry object

  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
