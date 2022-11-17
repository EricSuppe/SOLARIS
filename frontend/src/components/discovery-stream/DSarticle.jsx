import React from "react";
// import React, { useState } from 'react'
// import { format } from 'timeago.js'
import propTypes from "prop-types";
// import { useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import "./dsarticle.css"

export default function DSarticle(props) {

    // const [author,setAuthor] = useState(null);

    // useEffect(() => {
    //     const fetchAuthor = async () => {
    //         const response = await axios.get(`/api/user/${props.dataSet.author}`)
    //         setAuthor(response.data)
    //     }
    //     fetchAuthor()
    // },[])

    return (
    // <article className={'ds-card ds-card-grid-space-10-2 ds-card-grid-space-breakpoint ' + (props.editMode ? "edit__mode" : null)} title={props.dataSet.headline}>
    //     <Link to={props.editMode ? "" : `/solaris_news/article/${props.dataSet._id}`}> 
    //         <img className='article__picture' src={props.dataSet.displayPicture} alt="" />
    //         <div className="article__tags">
    //             {props.dataSet.tag.map((tag, index) => <span key={tag + index} className="tag">{tag}</span>)}
    //         </div>
    //         <div className="article__header">
    //             <span className='article__headline'>{props.dataSet.headline}</span>
    //             <p className='article__subHeadline'>{props.dataSet.previewText}</p>
    //             <div className="article__subContent">
    //                 <hr style={{height: "1px", color: "gray"}}/>
    //                 <div className="article__info">
    //                     <div className="left">                  
    //                         <div className="article__author" title={author ? `Autor: ${author.username}` : "Autor"}>
    //                             <picture className='article__profile-picture'>
    //                                 <source srcSet={author ? author.profilePicture : null}/>
    //                                 <img src={author ? author.profilePicture : null} alt="" />
    //                             </picture>
    //                             <div className="article__profile-desc">
    //                                 <span>{author ? author.username : null}</span>
    //                                 <span className='article__date'>•  {format(props.dataSet.createdAt)}</span>                              
    //                             </div>
    //                         </div>
    //                     </div>  
    //                     <div className="right">
    //                         <div className="views action" title='Klicks'>
    //                             <span style={{padding: "0 5px", color: "gray", fontSize: "12px"}}>37</span>
    //                             <box-icon name='objects-vertical-bottom' size="sm" color="gray"></box-icon>
    //                         </div>
    //                         <div className="share action" title='Teilen'>
    //                             <box-icon name='share-alt' size="sm" color="gray"></box-icon>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </Link>   
    // </article>
    <article 
        aria-label="news article"
        title={props.dataSet.headline}
        role="article"
        className="discovery-stream__item"
        data-discovery-stream-item-type={props.dataSet.type}
    >
        <div className="discovery-stream__item-container">
            <div className="discovery-stream__item-content">

            </div>
        </div>
    </article>
    )
}

DSarticle.propTypes = {
    dataSet: propTypes.object.isRequired,
    editMode: propTypes.bool.isRequired,
};