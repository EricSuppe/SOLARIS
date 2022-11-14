import React from 'react'
import propTypes from "prop-types";

export default function SliderEditor(props) {
  return (
    <li title={props.title} onClick={() => {document.getElementsByTagName("main")[0].classList.contains("slider-editor") ? document.getElementsByTagName("main")[0].classList.remove("slider-editor") : document.getElementsByTagName("main")[0].classList.add("slider-editor"); props.setEditMode(current => !current)} }>
        <box-icon name={props.icon} color="purple" size="md"></box-icon>
    </li>
  )
}

SliderEditor.propTypes = {
    icon: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    setEditMode: propTypes.func.isRequired,
}