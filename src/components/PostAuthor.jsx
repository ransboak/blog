import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/avatar1.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/post/users/bbshj`} className='post__author'>
        <div className="post__author-avatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="post__author-details">
            <h5>By: Ransford Boakye</h5>
            <small>Just now</small>
        </div>

    </Link>
  )
}

export default PostAuthor