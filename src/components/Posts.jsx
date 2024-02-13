import React from 'react'
import Thumbnail1 from '../assets/blog1.jpg'
import Thumbnail2 from '../assets/blog2.jpg'
import Thumbnail3 from '../assets/blog3.jpg'
import Thumbnail4 from '../assets/blog4.jpg'
import Post from './Post'

const dummyPosts = [
  {
    id: 1,
    thumbnail : Thumbnail1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing." ,
    category: 'education',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate beatae facere repellat eligendi similique nihil fugit? Et, cum!",
    authorID: 3,
  },{
    id: 2,
    thumbnail : Thumbnail2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing." ,
    category: 'education',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate beatae facere repellat eligendi similique nihil fugit? Et, cum!",
    authorID: 4,
  },{
    id: 1,
    thumbnail : Thumbnail3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing." ,
    category: 'education',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate beatae facere repellat eligendi similique nihil fugit? Et, cum!",
    authorID: 5,
  },{
    id: 1,
    thumbnail : Thumbnail4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing." ,
    category: 'education',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate beatae facere repellat eligendi similique nihil fugit? Et, cum!",
    authorID: 6,
  }
]

const Posts = () => {
  return (
    <section>
      <div className="container">
        {
          dummyPosts.map(({id, title, thumbnail, desc, authorID}) => {
            return <Post id={id} title={title} thumbnail={thumbnail} desc={desc} authorID={authorId} />
          })
        }
      </div>
    </section>
  )
}

export default Posts