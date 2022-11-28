import React from 'react'
import GuideLines from '../../guideLines/Guides'
import "./navbar.css"
import 'boxicons'
import useStaticData from '../../../../hooks/useStaticData'
import propTypes from "prop-types"

export default function Navbar(props) {

    useStaticData();

    const mainLinks = [
        {textKey: "homepage-link", link: "/", fallbackText: "Homepage"},
        {textKey: "news-link", link: "/news", fallbackText: "News"},
        {textKey: "about-link", link: "/about", fallbackText: "About Us"},
        {textKey: "team-link", link: "/team", fallbackText: "Team"},
        {textKey: "community-link", link: "/community", fallbackText: "Community"},
    ]

    const pageQuickScrollers = [
        {textKey: "landing-quickscroll", fallbackText: "Landing"},
        {textKey: "sponsors-quickscroll", fallbackText: "Sponsors"},
        {textKey: "news-quickscroll", fallbackText: "News"},
        {textKey: "team-quickscroll", fallbackText: "Team"},
        {textKey: "event-quickscroll", fallbackText: "Event"},
    ]

    const socials = [
        {name: "twitter", link: ""},
        {name: "discord-alt", link: ""},
        {name: "instagram", link: ""},
        {name: "youtube", link: ""},
    ]

    return (
      <header
        className={`SiteHeader variant--${props.variant} guides--${props.guides} theme--${props.theme} pathIndex--${props.path}`}
      >
        <div className="SiteHeader__contentWrapper">
          <div className="SiteHeader__guidesContainer">
            <GuideLines />
          </div>
          <div className="SiteHeader__container">
            <div className="SiteHeader__navContainer">
              <img
                className="SiteHeader__logo"
                src={`/images/Logo.svg`}
                alt=""
              ></img>
              <nav className="SiteHeaderNav">
                <ul className="SiteHeaderNav__list">
                  {mainLinks.map((link, index) => (
                    <li key={index + link} className="SiteHeaderNavItem">
                      <a
                        className="SiteHeaderNavItem__link"
                        data-hover-theme-key="0"
                        data-text-key={link.textKey}
                        href={link.link}
                      >
                        {link.fallbackText}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="SiteHeaderSubNavContainer">
                  <ul className="SiteHeaderSubNav__list">
                    {pageQuickScrollers.map((item, index) => (
                      <li key={index + item} className="SiteHeaderSubNavItem">
                        <a
                          className="SiteHeaderSubNavItem__link"
                          href=""
                          data-text-key={item.textKey}
                        >
                          {item.fallbackText}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="SiteHeaderSubNav__socialsList">
                    {socials.map((social, index) => (
                      <li
                        key={index + social}
                        className="SiteHeaderSubNavSocialsItem"
                      >
                        <a href={social.link}>
                          <box-icon type="logo" name={social.name}></box-icon>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              <nav className="SiteHeader__ctaNav">
                <ul className="SiteHeader__ctaNav__list">
                  <li className="SiteHeader__ctaNavItem">
                    <box-icon name="moon" color="gray"></box-icon>
                  </li>
                  <li className="SiteHeader__ctaNavItem">
                    <box-icon name="globe" color="gray"></box-icon>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="SiteHeader__subPathing">
              <div className="SiteHeader__subNav">
                <ul className="SiteHeaderSubNav__list"></ul>
              </div>
              <div className="SiteHeader__relativePath"></div>
            </div>
          </div>
        </div>
        <div className="SiteHeader__horizontalGuideLine"></div>
      </header>
    );
}

Navbar.propTypes = {
    variant: propTypes.string,
    theme: propTypes.string,
    guides: propTypes.string,
    path: propTypes.string,
}