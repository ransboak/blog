import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/avatar1.jpg'

const PostAuthor = () => {
  return (
    <Linkn to={`post/users/bbshj`}>
        <div className="post__author-avatar">
            <img src={Avatar} alt="" />
        </div>

    </Linkn>
  )
}

export default PostAuthor