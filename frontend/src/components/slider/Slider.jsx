import React, { useEffect } from "react"
import propTypes from "prop-types";
import "./slider.css"
import { CircularProgress } from "@mui/material";
import { useState } from "react";

import '@splidejs/react-splide/css'

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
        !interval ? interval = setInterval(slideDown, 8000) : null;
    }

    useEffect(() => {
        autoSlide()
    },[])

    return (
        <>
            <div className="slider-content-wrapper">
                <ul className="slider-content-layout" style={{transform: `translateX(-${(100 / props.data.length) * sliderPositon}%)`}}>
                    {props.data ? props.data.map((item, index) => <li 
                    key={index}
                    className={"slider-content " + (sliderPositon === index ? "active" : "")}
                    style={{backgroundImage: `url('${item.displayPicture}')`}}
                    data-slider-content-index={index}>            
                    </li>) : <li><CircularProgress/></li>}
                </ul>
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

