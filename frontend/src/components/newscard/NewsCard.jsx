import React from 'react'
import { format } from 'timeago.js'
import propTypes from "prop-types";
import "./newsCard.css"
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NewsCard({type="article", news}) {
    
    switch(type) {
        case "article": {
            return (
                <>
                    <article className='article__container' title={news.headline}>
                        <picture className="article-picture-container">
                            <source src={news.displayPicture}/>
                            {/* <img className='article-picture' src={news.displayPicture ?  : <CircularProgress style={{color: "#ff5c00"}}/>} alt="" /> */}
                        </picture>
                        <div className="article-tags">
                            {news.tag.map((tag, index) => <span key={tag + index} className="tag">{tag}</span>)}
                        </div>
                        <div className="article-header">
                            <span className='article-headline'>{news.headline}</span>
                            <p className='article-subHeadline'>{news.previewText}</p>
                            <div className='article-spoilerText'>
                                <Link to={`/solaris_news/article/${news._id}`}><span className='spoilerBtn'>Weiterlesen</span></Link>
                            </div>
                            <div className="article-subContent">
                                <hr style={{height: "1px", color: "gray"}}/>
                                <div className="article-info">
                                    <div className="left">                  
                                        <a className='article-author'>
                                            <box-icon type='solid' name='calendar' size="sm" color="gray"></box-icon>
                                            <span>{news.author}</span>
                                        </a>
                                        <div className='article-date'>
                                            <span>•  {format(news.createdAt)}</span>
                                        </div>
                                    </div>  
                                    <div className="right">
                                        <div className="views action" title='Klicks'>
                                            <span style={{padding: "0 5px", color: "gray", fontSize: "12px"}}>37</span>
                                            <box-icon name='objects-vertical-bottom' size="sm" color="gray"></box-icon>
                                        </div>
                                        <div className="like action" title='Likes'>
                                            <span style={{padding: "0 5px", color: "gray", fontSize: "12px"}}>12</span>
                                            {news.tag.length === 2 ? <box-icon name='heart' size="sm" color="gray"></box-icon> : <box-icon name='heart' type='solid' size="sm" color="red"></box-icon>}
                                        </div>
                                        <div className="share action" title='Teilen'>
                                            <box-icon name='share-alt' size="sm" color="gray"></box-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </>
            )
        }
        case "matchResult": {
            return (
                <>
                    <article>

                    </article>
                </>
            )
        }
    }

  return (
    <>
        
    </>
  )
}

NewsCard.propTypes = {
    type: propTypes.string.isRequired,
    news: propTypes.object.isRequired,
    index: propTypes.number.isRequired
};