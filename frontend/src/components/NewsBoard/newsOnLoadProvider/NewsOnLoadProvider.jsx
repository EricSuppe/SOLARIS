import React from 'react'
import propTypes from "prop-types";
import ArticleOnLoad from './newsItemsOnLoad/ArticleOnLoad';
import RankingOnLoad from './newsItemsOnLoad/RankingOnLoad';

export default function NewsOnLoadProvider({value}) {
    
    const object = Array.from({length: value}, () => Math.floor(Math.random() * 2));
    
    return (
        <>{object.length > 0 ? object.map((type) => 
            type === 0 ? <ArticleOnLoad/> : 
            type === 1 ? <RankingOnLoad/> : null
        ) : null}</>
    )
}

NewsOnLoadProvider.propTypes = {
    value: propTypes.number.isRequired,
};