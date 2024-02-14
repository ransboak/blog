import React, { useState } from 'react'
import dummyPosts from '../data'
import Post from '../components/PostItem'

const CategoryPosts = () => {
  const [posts, setPosts] = useState(dummyPosts)
  return (
    <section className='posts'>
    {posts.length > 0 ? <div className="container posts__container">
    {
      posts.map(({id, title, thumbnail, desc, category, authorID}) => {
        return <Post id={id} title={title} thumbnail={thumbnail} desc={desc} authorID={authorID} category={category} />
      })
    }
    </div> : <h2 className='center'>No posts yet</h2>} 
</section>
  )
}

export default CategoryPosts