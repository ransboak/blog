import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({id, title, thumbnail, desc, category, authorID}) => {
  return (
    <Link to={`/posts/${id}`} className='post'>
      <div className="post__thumbnail">
      <img src={thumbnail} alt="" />
      </div>
      <div className="post__content">
        <Link to={`/posts/${id}`}>
          <h3>{title.length > 30 ? title.substr(0, 30) + "..." : title}</h3>
        </Link>
        <p>{desc.length > 145 ? desc.substr(0, 145) + "..." : desc}</p>
        <div className="post__footer">
          <PostAuthor />
          <Link to={`/post/categories/${category}`} className='btn category'>{category}</Link>
        </div>
      </div>
    </Link>
  )
}

export default PostItem