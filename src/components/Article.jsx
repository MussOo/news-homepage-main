import { useState } from 'react'

function Article({number, title, description, img}) {

  return <div className='article'>
    <div className='picture'><img src={img} /></div>
    <div className='content-article'>
      <div className='header'>
        <div className='number'>{number}</div>
        <div className='title'><a href="">{title}</a></div>
      </div>
      <div className='description'>
        <span>{description} </span>
      </div>
    </div>
  </div>;
}

export default Article
