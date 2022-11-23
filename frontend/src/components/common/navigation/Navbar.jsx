import React from 'react'
import GuideLines from '../guideLines/Guides'
import "./navbar.css"
import 'boxicons'
import useEffectOnce from '../../../hooks/useEffectOnce'
import useStaticData from '../../../hooks/useStaticData'
import propTypes from "prop-types"

export default function Navbar(props) {

    useEffectOnce(() => useStaticData())

    return (
        <header className={`SiteHeader variant--${props.variant} guides--${props.guides} theme--${props.theme}`}>
            <div className="SiteHeader__contentWrapper">
                <div className="SiteHeader__guidesContainer">
                    <GuideLines/>
                </div>
                <div className="SiteHeader__container">
                    <div className="SiteHeader__navContainer">
                        <img className="SiteHeader__logo" src={`/images/Logo.svg`} alt=""></img>
                        <nav className="SiteHeaderNav">
                            <ul className="SiteHeaderNav__list">
                                <li className='SiteHeaderNavItem'>
                                    <a className="SiteHeaderNavItem__link" data-hover-theme-key="0" data-text-key="hompage-link" href='/'></a>
                                </li>
                                <li className='SiteHeaderNavItem'>
                                    <a className="SiteHeaderNavItem__link" data-hover-theme-key="0" data-text-key="news-link" href='/news'></a>
                                </li>
                                <li className='SiteHeaderNavItem'>
                                    <a className="SiteHeaderNavItem__link" data-hover-theme-key="0" data-text-key="about-link"></a>
                                </li>
                                <li className='SiteHeaderNavItem'>
                                    <a className="SiteHeaderNavItem__link" data-hover-theme-key="0" data-text-key="team-link"></a>
                                </li>
                                <li className='SiteHeaderNavItem'>
                                    <a className="SiteHeaderNavItem__link" data-hover-theme-key="0" data-text-key="community-link"></a>
                                </li>
                            </ul>
                        </nav>
                        <nav className='SiteHeader__ctaNav'>
                            <ul className='SiteHeader__ctaNav__list'>
                                <li className='SiteHeader__ctaNavItem'>
                                    <box-icon name='moon' color="gray"></box-icon>
                                </li>
                                <li className='SiteHeader__ctaNavItem'>
                                    <box-icon name='globe' color="gray"></box-icon>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='SiteHeader__horizontalGuideLine'></div>
        </header>
    )
}

Navbar.propTypes = {
    variant: propTypes.string,
    theme: propTypes.string,
    guides: propTypes.string,
}