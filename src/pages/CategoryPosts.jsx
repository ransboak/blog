import React, { useState } from 'react'
import dummyPosts from '../data'
import Post from '../components/PostItem'

const AuthorPosts = () => {
  const [posts, setPosts] = useState(dummyPosts)
  return (
    <section className='author__posts'>
    {posts.length > 0 ? <div className="container author__posts-container">
    {
      posts.map(({id, title, thumbnail, desc, category, authorID}) => {
        return <Post id={id} title={title} thumbnail={thumbnail} desc={desc} authorID={authorID} category={category} />
      })
    }
    </div> : <h2 className='center'>No posts yet</h2>} 
</section>
  )
}

export default AuthorPosts