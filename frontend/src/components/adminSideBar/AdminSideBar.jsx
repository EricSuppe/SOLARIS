import React, { useState } from 'react'
import "./adminSideBar.css"
import propTypes from "prop-types";
import SliderEditor from './tools/SliderEditor';

export default function AdminSideBar(props) {

    const [collpased,setCollapsed] = useState(true)

    const tools = [
        {name: "sliderEditor", component: <SliderEditor icon={"slideshow"} title={"Slider bearbeiten"} setEditMode={props.setEditMode}/>},
    ]

    return (
        <div className='admin__sidebar'>
            <div className="admin__handle" onClick={() => setCollapsed(current => !current)}><span className='admin_title'>{"Settings".split('').map((letter, index) => <div key={letter + index} className='admin__letter'>{letter}</div>)}</span></div>
            <div className={"admin__container " + (collpased ? null : "admin__container--open")}>
                <ul>
                    {props.tools.map((item) => tools.find(obj => obj.name === item).component)}
                </ul>
            </div>
        </div>
    )
}

AdminSideBar.propTypes = {
    tools: propTypes.array.isRequired,
    setEditMode: propTypes.func.isRequired,
}