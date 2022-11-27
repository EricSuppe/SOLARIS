import React from 'react'
import GuideLines from '../../guideLines/Guides'
import "./navbar.css"
import 'boxicons'
import useStaticData from '../../../../hooks/useStaticData'
import propTypes from "prop-types"

export default function Navbar(props) {

    useStaticData();

    return (
        <header className={`SiteHeader variant--${props.variant} guides--${props.guides} theme--${props.theme} pathIndex--${props.path}`}>
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
                                    <a className="SiteHeaderNavItem__link" data-hover-theme-key="0" data-text-key="hompage-link" href='/'>Startseite</a>
                                </li>
                                <li className='SiteHeaderNavItem'>
                                    <a className="SiteHeaderNavItem__link" data-hover-theme-key="0" data-text-key="news-link" href='/news'>Neuigkeiten</a>
                                </li>
                                <li className='SiteHeaderNavItem'>
                                    <a className="SiteHeaderNavItem__link" data-hover-theme-key="0" data-text-key="about-link">Über uns</a>
                                </li>
                                <li className='SiteHeaderNavItem'>
                                    <a className="SiteHeaderNavItem__link" data-hover-theme-key="0" data-text-key="team-link">Team</a>
                                </li>
                                <li className='SiteHeaderNavItem'>
                                    <a className="SiteHeaderNavItem__link" data-hover-theme-key="0" data-text-key="community-link">Community</a>
                                </li>
                            </ul>
                            <div className="SiteHeaderSubNavContainer">
                                <ul className='SiteHeaderSubNav__list'>
                                    <li className='SiteHeaderSubNavItem'>
                                        <a className='SiteHeaderSubNavItem__link' href="">Landing</a>
                                    </li>
                                    <li className='SiteHeaderSubNavItem'>
                                        <a className='SiteHeaderSubNavItem__link' href="">Sponsors</a>
                                    </li>
                                    <li className='SiteHeaderSubNavItem'>
                                        <a className='SiteHeaderSubNavItem__link' href="">News</a>
                                    </li>
                                    <li className='SiteHeaderSubNavItem'>
                                        <a className='SiteHeaderSubNavItem__link' href="">Team</a>
                                    </li>
                                    <li className='SiteHeaderSubNavItem'>
                                        <a className='SiteHeaderSubNavItem__link' href="">Event</a>
                                    </li>
                                </ul>
                                <ul className='SiteHeaderSubNav__socialsList'>
                                    <li className='SiteHeaderSubNavSocialsItem'>
                                        <a className='SiteHeaderSubNavSocialsItem__link' href="">
                                            <box-icon type='logo' name='twitter'></box-icon>
                                        </a>
                                    </li>
                                    <li className='SiteHeaderSubNavSocialsItem'>
                                        <a className='SiteHeaderSubNavSocialsItem__link' href="">
                                            <box-icon name='discord-alt' type='logo' ></box-icon>
                                        </a>
                                    </li>
                                    <li className='SiteHeaderSubNavSocialsItem'>
                                        <a className='SiteHeaderSubNavSocialsItem__link' href="">
                                            <box-icon name='youtube' type='logo' ></box-icon>
                                        </a>
                                    </li>
                                    <li className='SiteHeaderSubNavSocialsItem'>
                                        <a className='SiteHeaderSubNavSocialsItem__link' href="">
                                            <box-icon name='instagram' type='logo' ></box-icon>
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
                    <div className="SiteHeader__subPathing">
                        <div className="SiteHeader__subNav">
                            <ul className='SiteHeaderSubNav__list'>
                                
                            </ul>
                        </div>
                        <div className="SiteHeader__relativePath"></div>
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
    path: propTypes.string,
}