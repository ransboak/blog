import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({id, title, thumbnail, desc, authorID}) => {
  return (
    <Link to={`posts/${id}`} className='post'>
      <div className="post__thumbnail">
      <img src={thumbnail} alt="" />
      </div>
      <div className="post__content">
        <Link to={`posts/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{desc.length > 40 ? desc.substr(0, 40) + "..." : desc}</p>
        <div className="post__footer">
          
        </div>
      </div>
    </Link>
  )
}

export default PostItem