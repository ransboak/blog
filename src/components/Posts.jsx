import React, {useState} from 'react'
import Thumbnail1 from '../assets/blog1.jpg'
import Thumbnail2 from '../assets/blog2.jpg'
import Thumbnail3 from '../assets/blog3.jpg'
import Thumbnail4 from '../assets/blog4.jpg'
import Post from './PostItem'

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
    category: 'entertainment',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate beatae facere repellat eligendi similique nihil fugit? Et, cum!",
    authorID: 4,
  },{
    id: 3,
    thumbnail : Thumbnail3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing." ,
    category: 'sports',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate beatae facere repellat eligendi similique nihil fugit? Et, cum!",
    authorID: 5,
  },{
    id: 4,
    thumbnail : Thumbnail4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing." ,
    category: 'agriculture',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate beatae facere repellat eligendi similique nihil fugit? Et, cum!",
    authorID: 6,
  }, {
    id: 5,
    thumbnail : Thumbnail1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing." ,
    category: 'dance',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate beatae facere repellat eligendi similique nihil fugit? Et, cum!",
    authorID: 3,
  },{
    id: 6,
    thumbnail : Thumbnail2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing." ,
    category: 'education',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate beatae facere repellat eligendi similique nihil fugit? Et, cum!",
    authorID: 4,
  },{
    id: 7,
    thumbnail : Thumbnail3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing." ,
    category: 'education',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate beatae facere repellat eligendi similique nihil fugit? Et, cum!",
    authorID: 5,
  },{
    id: 8,
    thumbnail : Thumbnail4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing." ,
    category: 'education',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate beatae facere repellat eligendi similique nihil fugit? Et, cum!",
    authorID: 6,
  }
]

const Posts = () => {
  const [posts, setPosts] = useState(dummyPosts);
  return (
    <section className='posts'>
        <div className="container posts__container">
        {
          posts.map(({id, title, thumbnail, desc, category, authorID}) => {
            return <Post id={id} title={title} thumbnail={thumbnail} desc={desc} authorID={authorID} category={category} />
          })
        }
        </div>
    </section>
  )
}

export default Posts