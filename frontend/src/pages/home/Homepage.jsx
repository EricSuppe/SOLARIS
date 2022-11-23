import React, { Suspense, useEffect } from 'react'
import useStaticData from '../../hooks/useStaticData';
import "./homepage.css"
import "./homepage-sections.css"
import "./layout.css"
import Navbar from '../../components/common/navigation/Navbar';
import 'boxicons'
import { lazy } from 'react';
import { CircularProgress } from '@mui/material';
import News from './sections/news/News';
const Intro = lazy(() => import("./sections/intro/Intro"))
const Sponsors = lazy(() => import("./sections/sponsors/Sponsors"))
const Team = lazy(() => import("./sections/team/Team"))
import CanvasShade from '../../scripts/CanvasShade';

export default function NewsHomePage() {
  
  useEffect(() => {
    useStaticData();
    CanvasShade();
  },[]);

  return (
    <>
      <Navbar variant={"Overlay"} guides={"disabled"} theme={"transparent"}/>
      <main className="Homepage">
        <div className='Homepage__hero'>
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
        <div className="Hero__background__container" data-pattern-type-raster></div>
        <div className="Homepage__content">
          <section className='Landscape-transition'>
            <div className="Landscape__container">
              <img className='Landscape' src="/images/vectorpaint.svg" alt="" />
            </div>
          </section>
          <Suspense fallback={<CircularProgress/>}>
            <Intro/>
          </Suspense>
          <Suspense fallback={<CircularProgress/>}>
            <Sponsors/>
          </Suspense>
          <Suspense fallback={<CircularProgress/>}>
            <Team/>
          </Suspense>
          <Suspense fallback={<CircularProgress/>}>
            <News/>
          </Suspense>
        </div>
      </main>
    </>
  );
}
