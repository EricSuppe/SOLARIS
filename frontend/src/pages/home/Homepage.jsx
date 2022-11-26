import React, { Suspense } from 'react'
import useStaticData from '../../hooks/useStaticData';
import Spinner from "../transition/Spinner"
import "./homepage.css"
import "./homepage-sections.css"
import "./layout.css"
import Navbar from '../../components/common/navigation/Navbar';
import 'boxicons'
import { lazy } from 'react';
import News from './sections/news/News';
import Landing from './sections/landing/Landing';
const Intro = lazy(() => import("./sections/intro/Intro"))
const Sponsors = lazy(() => import("./sections/sponsors/Sponsors"))
const Team = lazy(() => import("./sections/team/Team"))

export default function NewsHomePage() {
  
  useStaticData();


  return (
    <>
      <Navbar variant={"Overlay"} guides={"enabled"} theme={"transparent"}/>
      <main className="Homepage">

        <Suspense fallback={<Spinner type={"linear"}/>}>
          <Landing/>
        </Suspense>
        {/* <div className='Homepage__hero'>
          <div className="Hero__headline__container">
            <h1
              className="Hero__headline"
              data-text-key="home-hero-header"
            ></h1>
            <p
              className="Hero__headline"
              aria-hidden="true"
              data-text-key="home-hero-header"
              data-overlay
            ></p>
          </div>
          <div className="Canvas__container ">
            <canvas width="32" height="32" data-js-target-script="canvas-shade"/>
            <div className="Canvas__background"></div>
          </div>
        </div>
        <div className="Hero__background__container" data-pattern-type-raster></div> */}
        <div className="Homepage__content">
          {/* <section className='Landscape-transition'>
            <div className="Landscape__container">
              <img className='Landscape' src="/images/vectorpaint.svg" alt="" />
            </div>
          </section> */}
          <Suspense fallback={<Spinner type={"linear"}/>}>
            <Intro/>
          </Suspense>
          <Suspense fallback={<Spinner type={"linear"}/>}>
            <Sponsors/>
          </Suspense>
          <Suspense fallback={<Spinner type={"linear"}/>}>
            <Team/>
          </Suspense>
          <Suspense fallback={<Spinner type={"linear"}/>}>
            <News/>
          </Suspense>
        </div>
      </main>
    </>
  );
}
