import React, { useEffect, useState } from 'react'
import "./newsCardPictureBig.css"
import propTypes from "prop-types";
import axios from 'axios';
import { format } from 'timeago.js';
import CircularProgress from '@mui/material/CircularProgress';
import useTagColor from '../../../../../hooks/useTagColor';

export default function NewsCardPictureBig({cardData}) {
  
  const [author,setAuthor] = useState(null);

  useEffect(() => {
      const fetchAuthor = async () => {
          const response = await axios.get(`/api/user/${cardData.author}`)
          setAuthor(response.data)
      }
      fetchAuthor()
  },[])

  return (
    <article className='article--big__container' title={cardData.headline}>
        <div className="article--big__image" style={{backgroundImage: `url(${cardData.displayPicture})`}}>
            <div className="article--big__desc">
              <span className='article--big__tags'>
                {cardData.tag.map((tag, index) => 
                <span key={tag + index} className="article--big__tag" style={useTagColor(tag)}>{tag}</span>)}
              </span>
              <span className='article--big__headline'>{cardData.headline}</span>
              <div className='article--big__info'>
                <div className="left">
                  {author ? <img src={author ? author.profilePicture : null} alt="" className='article--big__profilePicture'/> : <div style={{width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#27262698"}}><CircularProgress/></div>}
                  <span className='article--big__username'>{author ? author.username : "Laoding..."}</span>
                  <span className='article--big__release'>•  {format(cardData.createdAt)}</span>
                </div>
                <div className="right">
                  <div className="article--big__views" title='Klicks'>
                      <span style={{padding: "0 5px", color: "gray", fontSize: "12px"}}>37</span>
                      <box-icon name='objects-vertical-bottom' size="sm" color="gray"></box-icon>
                  </div>
                  <div className="article--big__share" title='Teilen'>
                      <box-icon name='share-alt' size="sm" color="gray"></box-icon>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </article>
  )
}

NewsCardPictureBig.propTypes = {
    cardData: propTypes.object.isRequired,
};

