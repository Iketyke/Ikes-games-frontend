import React from 'react'
import './Comment.css'

const Comment = ({author, created_at, body, votes}) => {
  return (
    <div className='App__Comment'>
      <div className='App__Comment-header'>
        <p>{author}</p>
        <p>{created_at}</p>
      </div>
      <p>{body}</p>
      <p>{votes} likes</p>
    </div>
  )
}

export default Comment