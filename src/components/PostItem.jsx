import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({id, title, thumbnail, desc, authorID}) => {
  return (
    <Link to={`posts/${id}`} className='post'>
        <img src={thumbnail} alt="" />
        <h4>{title}</h4>
        <p>{desc}</p>
    </Link>
  )
}

export default Post