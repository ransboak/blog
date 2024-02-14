import React, {useState} from 'react'
import Post from './PostItem'
import dummyPosts from '../data'


const Posts = () => {
  const [posts, setPosts] = useState(dummyPosts);
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

export default Posts