import React from 'react'
import propTypes from 'prop-types'
import "./policy-nav.css"
import { useState } from 'react';
import { POLICY_COMPONENT_INITIAL_STATE_MAP } from '../../../../Keys/Keys';

export default function PolicyNav(props) {

    const [currentElement,setCurrentElement] = useState(POLICY_COMPONENT_INITIAL_STATE_MAP[props.initialState]);

    return (
        <nav 
            className='policy-center__navigation__container'
        >
            <ul 
                className='policy-center__navigation__list policy-center__navigation__list-layout'
            >
                <PolicyNavItem 
                    changeState={props.changePageState()} 
                    currentElement={setCurrentElement}
                    link="imprint" 
                    displayValue='Impressum'
                    locationIndex={0}
                    />
                <PolicyNavItem 
                    changeState={props.changePageState()} 
                    currentElement={setCurrentElement}
                    link="contact" 
                    displayValue='Kontakt'
                    locationIndex={1}
                    />
                <PolicyNavItem 
                    changeState={props.changePageState()} 
                    currentElement={setCurrentElement}
                    link="privacy" 
                    displayValue='Datenschutz'
                    locationIndex={2}
                />
            </ul>
            <div
                className='policy-center__navigation__index__track'
            >
                <div
                    className='policy-center__navigation__index__track__wrapper'
                    >
                    <div
                        className='policy-center__navigation__index'
                        style={
                            {
                                transform: `translateX(${currentElement * 100 }%)`
                            }
                        }
                    >
                    </div>
                </div>
            </div>
        </nav>
    )
}

function PolicyNavItem(props) {
    return (
        <li 
            className='policy-center__navigation__item' 
            onClick={() => {
                props.changeState(() => props.link);
                props.currentElement(() => props.locationIndex);
            }}
        >
            <div
                className='policy-center__navigation__item__wrapper'
            >
                <span 
                    style={{color:"white"}}
                >
                    {props.displayValue}
                </span>
            </div>
        </li>
    )
}

PolicyNav.propTypes = {
    changePageState: propTypes.func.isRequired,
    initialState: propTypes.string.isRequired || null,
}

PolicyNavItem.propTypes = {
    changeState: propTypes.func.isRequired,
    link: propTypes.string.isRequired,
    displayValue: propTypes.string.isRequired,
    currentElement: propTypes.func.isRequired,
    locationIndex: propTypes.number.isRequired,
}