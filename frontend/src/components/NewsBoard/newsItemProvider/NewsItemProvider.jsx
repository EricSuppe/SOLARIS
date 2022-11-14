import propTypes from "prop-types";
import NewsCard from './newsItem/newsCard/NewsCard';
import React from "react";
import StandingsCard from "./newsItem/standingsCard/StandingsCard";
import MatchResult from "./newsItem/matchResult/MatchResult";
import NewsCardPictureBig from "./newsItem/newsCardPictureBig/NewsCardPictureBig";

export default function NewsItemProvider (props) {
    switch(props.cardData.type) {
        case "newsArticle": 
            return (        
                <NewsCard cardData={props.cardData} editMode={props.editMode}/>
            )
        case "article_big": 
            return (
                <NewsCardPictureBig cardData={props.cardData}/>
            )
        case "standings": 
            return (
                <StandingsCard cardData={props.cardData}/>
            )
        case "matchResult": 
            return (
                <MatchResult cardData={props.cardData}/>
            )
        default: return null
    }
}

NewsItemProvider.propTypes = {
    type: propTypes.string.isRequired,
    cardData: propTypes.object.isRequired,
    editMode: propTypes.bool.isRequired,
};



