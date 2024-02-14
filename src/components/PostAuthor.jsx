import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/avatar1.jpg'

const PostAuthor = () => {
  return (
    <Link to={`post/users/bbshj`}>
        <div className="post__author-avatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="post__author-details">
            <h5>By: Ransford</h5>
        </div>

    </Link>
  )
}

export default PostAuthor