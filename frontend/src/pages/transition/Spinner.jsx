import React from 'react'
import "./spinner.css"
import propTypes from "prop-types"

export default function Spinner(props) {
  return (
    <div className={`Spinner__conatiner variant--${props.type}`}>
        <img className='Spinner Spinner__outer_secondary' src="/images/Spinner_outer_secondary.svg" alt="" />
        <img className='Spinner Spinner__outer_main' src="/images/Spinner_outer_main.svg" alt="" />
        <img className='Spinner Spinner__inner' src="/images/Spinner_inner.svg" alt="" />
    </div>
  )
}

Spinner.propTypes = {
    type: propTypes.string,
}