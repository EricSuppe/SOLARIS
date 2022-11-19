import React, { useState } from "react";
// import React, { useState } from 'react'
// import { format } from 'timeago.js'
import propTypes from "prop-types";
// import { useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import "./dsarticle.css"
import { Link } from "react-router-dom";

export default function DSarticle(props) {
    
    const [isHovered,setIsHovered] = useState(false)
    
    // const [author,setAuthor] = useState(null);

    // useEffect(() => {
    //     const fetchAuthor = async () => {
    //         const response = await axios.get(`/api/user/${props.dataSet.author}`)
    //         setAuthor(response.data)
    //     }
    //     fetchAuthor()
    // },[])

    return (
        <article 
            aria-label="news article"
            title={props.dataSet.headline}
            role="article"
            className={"discovery-stream__item discovery-stream__item-grid-placement"}
            data-discovery-stream-item-type={props.dataSet.type}    
        >
            <Link 
                className="discovery-stream__item__container" to={""}
                onMouseLeave={() => setIsHovered(() => false)}
                onMouseEnter={() => setIsHovered(() => true)}
            >
                <div className={"discovery-stream__item__content " + (isHovered ? "discovery-stream__item--hover" : "")}>
                    <div className="discovery-stream__item__content__head">
                        <div style={{backgroundImage: `url(${props.dataSet.displayPicture})`}} alt="article picture" className="discovery-stream__item__img"></div>
                        <div className="discovery-stream__item__author">
                            
                        </div>
                    </div>
                    <div className="discovery-stream__item__content__body">
                        <h2 className="discovery-stream__item__headline">{props.dataSet.headline}</h2>
                        <div className="discovery-stream__item__meta">{props.dataSet.previewText}</div>
                    </div>
                    <div className="discovery-stream__item__content__footer">
                        <span className="discovery-stream__item__link">Zum Artikel</span>
                    </div>
                </div>
            </Link>
        </article>
    )
}

DSarticle.propTypes = {
    dataSet: propTypes.object.isRequired,
    editMode: propTypes.bool.isRequired,
};