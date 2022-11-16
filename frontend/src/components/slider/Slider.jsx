import React, { useEffect } from "react"
import propTypes from "prop-types";
import "./slider.css"
import { CircularProgress } from "@mui/material";
import { useState } from "react";

import '@splidejs/react-splide/css'
import "./slide.css"

export default function Slider(props) {

    let interval;

    const [sliderPositon,setSliderPosition] = useState(0)

    const slideUp = () => {
        setSliderPosition(current => current -1 >= 0 ? current - 1 : props.data.length - 1);
    }
    const slideDown = () => {
        setSliderPosition(current => current + 1 <= props.data.length - 1 ? current + 1 : 0);
    }

    const autoSlide = () => {
        !interval ? interval = setInterval(() => {
            setTimeout(fadeOut,0);
            setTimeout(reset,500);
            setTimeout(fadeIn,600);
        }, 8000) : null;
    }

    useEffect(() => {
        autoSlide()
    },[]);

    const fadeOut = () => {
        document.getElementsByClassName("slider-content-layout")[0].classList.replace("slider-content-layout--fade-in", "slider-content-layout--fade-out")
    }
    const reset = () => {
        document.getElementsByClassName("slider-content-layout")[0].classList.replace("slider-content-layout--fade-out", "slider-content-layout--reset")
    }
    const fadeIn = () => {
        document.getElementsByClassName("slider-content-layout")[0].classList.replace("slider-content-layout--reset", "slider-content-layout--fade-in")
    }

    return (
        <>
            <div className="slider-content-layout-wrapper">
                <div className="slider-item"></div>
                <div className="slider-content-layout slider-content-layout--fade-in" style={{transform: `translateX(-${(100 / props.data.length) * sliderPositon}%)`}}>
                    {props.data ? props.data.map((item, index) => <div 
                    key={index}
                    className={"slider-content-cta"}>    

                    </div>) : <div><CircularProgress/></div>}
                </div>
            </div>
            <div className="slider-layout-wrapper">     
                <div className="slider-layout">           
                    <span className="slider-position-move" data-slider-perform-id="move-left-onClick" onClick={() => slideUp()}>
                        <box-icon name='chevron-left' size="lg" color="gray"></box-icon>
                    </span>
                    <span className="slider-position-index-container">
                        <ul className="slider-position-index-wrapper">
                            {props.data ? props.data.map((item, index) => <li 
                            key={item._id + index} className="slider-position-index "
                            data-slider-position-index={index === sliderPositon ? "active" : ""}
                            onClick={() => setSliderPosition(() => index)}>
                            </li> ) : null}
                        </ul></span>
                    <span className="slider-position-move" data-slider-perform-id="move-right-onClick" onClick={() => slideDown()}>
                        <box-icon name='chevron-right' size="lg" color="gray"></box-icon>
                    </span>
                </div>      
            </div>
        </>
    )
}


Slider.propTypes = {
    data: propTypes.array.isRequired,
}

