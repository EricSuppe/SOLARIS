import React, { Suspense } from 'react'
import useStaticData from '../../hooks/useStaticData';
import Spinner from "../transition/Spinner"
import { Helmet } from 'react-helmet';
import "./homepage.css"
import "./homepage-sections.css"
import "./layout.css"
import Navbar from '../../components/common/navigation/navbar/Navbar';
import 'boxicons'
import { lazy } from 'react';
import News from './sections/news/News';
import Landing from './sections/landing/Landing';
import QuickScroll from '../../components/common/navigation/quickScroll/QuickScroll';
import NextEvent from './sections/nextEvent/NextEvent';
const ScrollIndex = lazy(() => import('../../components/common/navigation/scrollIndex/ScrollIndex'))
const Slider = lazy(() => import("./sections/slider/Slider"))
const Sponsors = lazy(() => import("./sections/sponsors/Sponsors"))
const Team = lazy(() => import("./sections/team/Team"))

export default function NewsHomePage() {
  
  useStaticData();

  return (
    <>
      <Helmet>
        <title>Solaris Esports Homepage</title>
        <meta name="description" content="Solaris Esports Website Homepage." />
        <meta name="theme-color" content="#ff5c00" />
      </Helmet>
      <ScrollIndex />
      <Navbar
        variant={"Overlay"}
        guides={"enabled"}
        theme={"transparent"}
        path={"available"}
      />
      <main id="scroll-index-target" className="Homepage">
        <Suspense fallback={<div style={{width: "40px", height: "40px"}}><Spinner type={"linear"}/></div>}>
          <Landing/>
          <Sponsors/>
          <Slider/>
          <NextEvent/>
          <News/>
          <Team/>
        </Suspense>
        <QuickScroll/>
      </main>
    </>
  );
}