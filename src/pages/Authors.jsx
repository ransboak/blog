import React from 'react'
import Avatar1 from '../assets/avatar1.jpg'
import Avatar2 from '../assets/avatar2.jpg'
import Avatar3 from '../assets/avatar3.jpg'
import Avatar4 from '../assets/avatar4.jpg'
import Avatar5 from '../assets/avatar5.jpg'

const authorsData = [
  {id: 1, avatar: Avatar1, name: 'Ransford Boakye', posts: 3},
  {id: 2, avatar: Avatar2, name: 'Kwame Amo', posts: 2},
  {id: 3, avatar: Avatar3, name: 'Kofi Frimps ', posts: 6},
  {id: 4, avatar: Avatar4, name: 'Maame Nsiah', posts: 1},
  {id: 5, avatar: Avatar5, name: 'Sule Muntari', posts: 4},
]
const Authors = () => {
  return (
    <section className='authors'>
      <div className="container authors__container">
        {
          authorsData.map(({id, avatar, name, posts}) => {
            return <article className='author'>
              <div className="author-avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="author-details">
                <h4>{name}</h4>
                <small>{posts} posts</small>
              </div>
            </article>
          })
        }
      </div>
    </section>
  )
}

export default Authors