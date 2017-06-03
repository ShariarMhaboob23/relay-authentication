import React from 'react'
import PropTypes from 'prop-types'
import Relay from 'react-relay'

const PostDetail = props =>
  <div>
    {props.viewer.post.title}<br />
    {props.viewer.post.description}
  </div>

PostDetail.propTypes = {
  viewer: PropTypes.shape({
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default Relay.createContainer(PostDetail, {
  initialVariables: {
    postId: 'invalid',
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        post (postId: $postId) {
          title,
          description
        }
      }
    `,
  },
})
