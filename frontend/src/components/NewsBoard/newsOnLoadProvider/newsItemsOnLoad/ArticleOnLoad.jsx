import React from 'react'
import "./onLoad.css"

export default function ArticleOnLoad () {
  
  return (
    <article className='loadArt'>
      <div className='loadArt__picture'></div>
      <div className="loadArt__tags">
        <div></div>
        <div></div>
      </div>
      <div className="loadArt__header">
        <span className='loadArt__headline'></span>
        <div className='loadArt__text'></div>
        <div></div>
        <div></div>
      </div>
      <div className='loadArt__info'>
        <div className='loadArt__profilePicture'></div>
        <div className="loadArt__author">
          <div></div>
          <div></div>
        </div>
      </div>
    </article>
  )
}
