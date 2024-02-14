import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'

const PostDetail = () => {
  return (
    <section className='post-detail'>
      <div className="container post-detail__container">
        <div className="post-detail__container">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`post/gdhd/edit`} className='btn sm primary'>edit</Link>
            <Link to={`post/gdhd/delete`} className='btn sm danger'>delete</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostDetail