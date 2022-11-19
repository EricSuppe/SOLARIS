import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import "./policy-center.css"
import PolicyNav from '../../components/page-components/policy-center/policy-navigation/PolicyNav'
import { POLICY_COMPONENT_MAP } from '../../Keys/Keys'
// import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

export default function PolicyCenter(props) {

    
    // set the component taht should be loaded as initial state
    const [pageState,setPageState] = useState(props ? props.renderComponent : "default")
    
    // get the component to load from map
    const Component = POLICY_COMPONENT_MAP[pageState] || POLICY_COMPONENT_MAP["default"]

    useEffect(() => {
        startZoom()
        setTimeout(stopZoom,100)
    }, [Component]);

    const startZoom = () => {
        console.log("zoom");
        document.getElementsByClassName("policy-center__header__container")[0].classList.contains("policy-center__header__container--zoom") && document.getElementsByClassName("policy-center__header__container")[0].classList.remove("policy-center__header__container--zoom")
    }
    const stopZoom = () => {
        document.getElementsByClassName("policy-center__header__container")[0].classList.add("policy-center__header__container--zoom")  
    }

    return (

        <main 
            id="policy-center-root" 
            data-root-id="policy-center"
        >  
            {/* <Navbar/> */}
            <div 
                className='policy-center-outer-wrapper'
            >
                <section 
                    role="banner" 
                    aria-label='policy-center-header' 
                    data-section-id="policy-center"
                    className='policy-center__header section-layout-touch'     
                >   
                    <picture 
                        className="policy-center__header__container"  
                        style={{backgroundImage: `url(/images/News-Background-noText.svg)`}}
                    />                    
                </section>
                <section 
                    role="navigation"
                    aria-label='policy-center-navigation' 
                    data-section-id="policy-center-navigation"
                    className='policy-center__navigation section-layout-touch'
                >
                    <PolicyNav 
                        changePageState={() => setPageState} 
                        initialState={props.renderComponent || null}
                    />
                </section>
                <section
                    role="main"
                    aria-label='policy-center-content'
                    className='policy-center__body section-layout-dont-touch'
                >
                    <Component/>
                </section>
                <Footer/>
            </div>
        </main>
    )
}

PolicyCenter.propTypes = {
    renderComponent: propTypes.string,
}