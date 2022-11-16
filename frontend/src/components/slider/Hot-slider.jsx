import React, { useEffect } from "react"
import propTypes from "prop-types";
import "./hot-slider.css"
import "./hot-slider-carousel.css"
import "./hot-slider-carousel-content.css"
import "./hot-slider-var.css"
import "./hot-slider-content.css"
import "./hot-slider-timeline.css"
import { useState } from "react";
import useTagColor from "../../hooks/useTagColor"
import { format } from 'timeago.js'

export default function Slider(props) {

    let interval;
    let interval2;

    let sliderPosition = 0;

    let nextPrevious;

    const [dataIndex,setDataIndex] = useState(0);
    
    const autoSlide = () => {
        !interval ? interval = setInterval(() => {
            setTimeout(definePrevious,0)
            setTimeout(setActive,0)
            setTimeout(fadeOut,0);
            setTimeout(setPrevious,0);
            setTimeout(reset,600);
            setTimeout(fadeIn,700);
            setTimeout(setDefault,2000);
        }, 5000) : null;
    }

    const autoSetSliderPositon = () => {
        !interval2 ? interval2 = setInterval(() => {
            sliderPosition = sliderPosition + 1 <= props.data.length - 1 ? sliderPosition + 1 : 0
            setTimeout(stepData,500)
        }, 5000) : null
    }

    useEffect(() => {
        autoSlide();
        autoSetSliderPositon();
    },[]);

    const stepData = () => {
        setDataIndex(() => sliderPosition)
    }
    const fadeOut = () => {
        document.getElementsByClassName("hot-slider-item__content")[0].classList.replace("hot-slider-item__content--fade-in", "hot-slider-item__content--fade-out")
    }
    const reset = () => {
        document.getElementsByClassName("hot-slider-item__content")[0].classList.replace("hot-slider-item__content--fade-out", "hot-slider-item__content--reset")
    }
    const fadeIn = () => {
        document.getElementsByClassName("hot-slider-item__content")[0].classList.replace("hot-slider-item__content--reset", "hot-slider-item__content--fade-in")
    }
    const setActive = () => {
        document.getElementsByClassName("hot-slider-carousel__item")[sliderPosition].classList.add("hot-slider-carousel__item--active")
    }
    const definePrevious = () => {
        nextPrevious = document.getElementsByClassName("hot-slider-carousel__item--active")[0];
    }
    const setPrevious = () => {
        nextPrevious.classList.replace("hot-slider-carousel__item--active","hot-slider-carousel__item--previous");
    }
    const setDefault = () => {
        document.getElementsByClassName("hot-slider-carousel__item--previous")[0].classList.remove("hot-slider-carousel__item--previous")
    }

    return (
        <>
            <div className="hot-slider">
                <div className="hot-slider__carousel">
                    <div className="hot-slider-carousel">
                        {props.data.map((item, index) => <div 
                        key={item._id + index} 
                        className={"hot-slider-carousel__item hot-slider-carousel__item--image " + (index === 0 ? "hot-slider-carousel__item--active" : "")}>
                            <div className="image-view">
                                <div className="image-view-container">
                                    <img className="image-view__content" 
                                    src={item.displayPicture} alt="" 
                                    title={item.headline}/>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
                <div className="hot-slider__content">
                    <div className="hot-slider-item" data-content-id={props.data[dataIndex]._id}>
                        <div className="hot-slider-item__content hot-slider-item__content--fade-in">
                            <h2 className="hot-slider-item__tag">{props.data[dataIndex].tag.map((item) => <span 
                            key={item._id} style={useTagColor(item)} 
                            className="tag hot-slider-item__tag-item">{item}</span>)}
                                <span className="hot-slider-item__tag-date">•  {format(props.data[dataIndex].createdAt)}</span>
                            </h2>
                            <div className="hot-slider-item__title-wrapper">
                                <a href={`/solaris_news/article/${props.data[dataIndex]._id}`}>
                                    <h2 className="hot-slider-item__title">{props.data[dataIndex].headline}</h2>
                                </a>
                                <a href={`/solaris_news/article/${props.data[dataIndex]._id}`}>
                                    <h2 className="hot-slider-item__title--subHeading">{props.data[dataIndex].previewText}</h2>
                                </a>
                            </div>
                            <h2 className="hot-slider-item__cta">
                                <a className="button button-clickable" href={`/solaris_news/article/${props.data[dataIndex]._id}`}>
                                    <span className="button__content">
                                        <span className="button__label">Zum Artikel</span>
                                    </span>
                                </a>
                            </h2>
                        </div>
                    </div>
                    <div className="hot-slider-timeline hot-slider-timeline--animate">
                        <div className="hot-slider-timeline__items">
                            {props.data.map((item, index) => <div 
                            key={item._id + index} 
                            className={"hot-slider-timeline__item " + (index === dataIndex ? "hot-slider-timeline__item--active" : "")}
                            onClick={() => sliderPosition = index - 1}>
                                <div className="hot-slider-timeline__item-content">
                                    <div className="hot-slider-timeline__progress-bar-mask">
                                        <div className="hot-slider-timeline__progress-bar"></div>
                                    </div>
                                    <div className="hot-slider-timeline__item-title">{item.headline}</div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Slider.propTypes = {
    data: propTypes.array.isRequired,
}