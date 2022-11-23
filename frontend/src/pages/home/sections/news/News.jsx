import React, { useState } from 'react'
import "./news.css"
import GuideLines from '../../../../components/common/guideLines/Guides'
import { useRef } from 'react';

export default function News() {

    const carousel = useRef(document.getElementById("carousel-scroll-track"))

    console.log(carousel.current);

    const [scrollProgressTo75,setScrollProgressTo75] = useState(0)

    const handleCarouselScroll = (e) => {
        let scrollProgress = (e.target.scrollLeftMax - e.target.scrollLeft)/e.target.scrollLeftMax*-100 +100
        setScrollProgressTo75(() => scrollProgress*0.75)
    }

    const handleCarouselNavClick = (value) => {
        // console.log(carousel.current);
        carousel.current.scrollTo({top: 0, left: carousel.current.scrollLeftMax/4 * (value + 1), behavior: "smooth"})
    }

    return (
        <section className="Section HomepageNews" data-section-id>
            <div className="Section__masked">
                <div className="Section__backgroundMask">
                    <div className="Section__background">
                        <GuideLines />
                    </div>
                </div>
                <div className="Section__container">
                    <div className="Section__layoutContainer">
                        <div className="Section__layout">
                            <div className="NewsGrid RowLayout">
                                <section className='NewsCarousel'>
                                    <section className='NewsCarousel__tag'>
                                        <header className='NewsCarousel__tag__title'>
                                            <h2>Alle aktuellen Infos rund um Solaris</h2>
                                        </header>
                                    </section>
                                    <section className='NewsCarousel__container'>
                                        <div id="carousel-scroll-track" className="NewsCarousel__track" onScroll={(e) => handleCarouselScroll(e)}>
                                            <div className="News">
                                                <div className="RowLayout InnerRowGrid">
                                                    <div className="InnerNewsGrid">
                                                        <section className='News__infoWrapper'>
                                                            <div className="NewsInfo__headline">
                                                                <span className='NewsInfo__headline__text'>Solaris schafft das 14 zu 0 und leigt damit auf  dem ersten Platz der Prime-League Division 5.26!</span>
                                                            </div>
                                                            <div className="NewsInfo__previewText">
                                                                <p className='NewsInfo__previewText__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quos modi vero corporis optio mollitia temporibus corrupti. Cumque eligendi iure repellat officiis dolore facilis omnis deleniti quo aliquid cupiditate aperiam, laudantium ratione minima mollitia nobis.</p>
                                                            </div>
                                                        </section>
                                                        <section className='News__imageWrapper'>
                                                            <img className='News__imageWrapper__image' src="https://firebasestorage.googleapis.com/v0/b/solaris-15e7c.appspot.com/o/Rectangle%20123.svg?alt=media&token=7f6efd63-1425-42f8-9f48-c07dd703bd85" alt="" />
                                                        </section>
                                                    </div>
                                                    <div className="InnerNewsGrid">
                                                        <section className='News__infoWrapper'>
                                                            <div className="NewsInfo__headline">
                                                                <span className='NewsInfo__headline__text'>Solaris schafft das 14 zu 0 und leigt damit auf  dem ersten Platz der Prime-League Division 5.26!</span>
                                                            </div>
                                                            <div className="NewsInfo__previewText">
                                                                <p className='NewsInfo__previewText__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quos modi vero corporis optio mollitia temporibus corrupti. Cumque eligendi iure repellat officiis dolore facilis omnis deleniti quo aliquid cupiditate aperiam, laudantium ratione minima mollitia nobis.</p>
                                                            </div>
                                                        </section>
                                                        <section className='News__imageWrapper'>
                                                            <img className='News__imageWrapper__image' src="https://firebasestorage.googleapis.com/v0/b/solaris-15e7c.appspot.com/o/Rectangle%20123.svg?alt=media&token=7f6efd63-1425-42f8-9f48-c07dd703bd85" alt="" />
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="News"></div>
                                            <div className="News"></div>
                                            <div className="News"></div>
                                        </div>
                                    </section>
                                    <section className='NewsCarousel__nav'>
                                        <nav>
                                            <div className="NewsCarousel__nav__line" style={{clipPath: `inset(0px ${75 - scrollProgressTo75}% 0px ${scrollProgressTo75}%)`}}>
                                                <div className="NewsCarousel__nav__lineSegment"></div>
                                                <div className="NewsCarousel__nav__lineSegment"></div>
                                                <div className="NewsCarousel__nav__lineSegment"></div>
                                                <div className="NewsCarousel__nav__lineSegment"></div>
                                            </div>
                                            <ul className='NewsCarousel__nav__kategories'>
                                                <li className='NewsCarousel__nav__kategorie'  onClick={() => handleCarouselNavClick(-1)}>
                                                    <span>Prime League</span>
                                                </li>
                                                <li className='NewsCarousel__nav__kategorie' onClick={() => handleCarouselNavClick(1)}>
                                                    <span>Prime League</span>
                                                </li>
                                                <li className='NewsCarousel__nav__kategorie' onClick={() => handleCarouselNavClick(2)}>
                                                    <span>Prime League</span>
                                                </li>
                                                <li className='NewsCarousel__nav__kategorie' onClick={() => handleCarouselNavClick(3)}>
                                                    <span>Prime League</span>
                                                </li>
                                            </ul>
                                        </nav>
                                    </section>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
