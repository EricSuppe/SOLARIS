import React from 'react';
import { useState } from 'react';
import useTagColor from '../../hooks/useTagColor';
import "./newsFilter.css"
import propTypes from "prop-types";

const NewsFilter = (props) => {

    const [filterBarActive,setFilterBarActive] = useState(false)

    const filter = [
        {name: "news", value: "newsArticle", display: "News Artikel", type: "solid"},
        {name: "report", value: "matchResult", display: "Spieltage", type: "solid"},
        {name: "trophy", value: "standings", display: "Rangliste", type: "solid"},
        {name: "twitter", value: "twitter", display: "Twitter", type: "logo"},
        {name: "youtube", value: "youtube", display: "Youtube", type: "logo"},
        {name: "twitch", value: "twitch", display: "Twitch", type: "logo"},
        {name: "instagram-alt", value: "instagram", display: "Instagram", type: "logo"},
    ]

    const tagFilter = [
        {name: "Prime League"},
        {name: "League Of Legends"},
    ]

    return (
        <section className='newsFilter__container'>
            <ul className='newsFilter__filterList'>
                <li className='newsFilter__item__other' onClick={() => {
                    let newArr = [...props.getFilter]; newArr.map((item) => {item.active = false}); props.setFilter(newArr);
                    newArr = [...props.getTagFilter]; newArr.map((item) => {item.active = false}); props.setTagFilter(newArr);
                    setFilterBarActive(() => false)}}>
                    <box-icon name='menu' color="white" size="sm"></box-icon>
                    <span className='newsFilter__name__other'>Solaris Feed</span>
                </li>
                <li className={'newsFilter__item__other ' + (props.getActiveTagFilter.length > 0 ? "newsFilter__item__other--active" : null)} onClick={() => {setFilterBarActive(current => !current)}}>
                    <box-icon name='purchase-tag' type='solid' size="sm" color={props.getActiveTagFilter.length > 0 ? "black" : "white"}></box-icon>
                    <span className='newsFilter__name__other'>Tags</span>
                </li>
                {filter.map((item, index) =>       
                    <li key={item.value} title={`Filter setzen für: ${item.display}`} 
                        className={'newsFilter__item ' + (props.getFilter[index].active ? "newsFilter__item--active" : null)} 
                        onClick={() => {let newArr = [...props.getFilter]; newArr[index] = {name: item.value, active: !props.getFilter[index].active}; props.setFilter(newArr);}}>
                        <box-icon type={item.type} name={item.name} color={props.getFilter[index].active ? "black" : "white"} size="sm"></box-icon>
                        <span className='newsFilter__name'>{item.display}</span>
                    </li>)}
                <li className='newsFilter_item__search'>
                    <form className='newsFilter_item__form' action="">
                        <input className='newsFilter_searchInput' type="text" />
                        <button>
                            <box-icon name='search-alt-2' ></box-icon>
                        </button>
                    </form>
                </li>
            </ul>
            <ul className={'newsFilter__filterList__tags ' + (filterBarActive ? "newsFilter__filterList__tags--active" : null)} title="Tag-Filter">
                {tagFilter.map((tag, index) => 
                <li key={tag.name} 
                    className={'newsFilter__tag ' + (props.getTagFilter[index].active ? "newsFilter__tag--active" : null)} 
                    style={useTagColor(tag.name)} 
                    onClick={() => {let newArr = [...props.getTagFilter]; newArr[index] = {name: tag.name, active: !props.getTagFilter[index].active}; props.setTagFilter(newArr);}}>
                    <div className='newsFilter__tag-checkbox'></div>
                    <span className='newsFilter__tag-name'>{tag.name}</span>
                </li>)}
            </ul>
        </section>
    );
}

export default NewsFilter;

NewsFilter.propTypes = {
    getFilter: propTypes.array.isRequired,
    setFilter: propTypes.func.isRequired,
    getTagFilter: propTypes.array.isRequired,
    setTagFilter: propTypes.func.isRequired,
    getActiveTagFilter: propTypes.array.isRequired,
}