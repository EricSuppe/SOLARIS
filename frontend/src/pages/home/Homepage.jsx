import React, { Suspense } from 'react'
import useStaticData from '../../hooks/useStaticData';
import Spinner from "../transition/Spinner"
import "./homepage.css"
import "./homepage-sections.css"
import "./layout.css"
import Navbar from '../../components/common/navigation/navbar/Navbar';
import 'boxicons'
import { lazy } from 'react';
import News from './sections/news/News';
import Landing from './sections/landing/Landing';
import QuickScroll from '../../components/common/navigation/quickScroll/QuickScroll';
const Intro = lazy(() => import("./sections/intro/Intro"))
const Sponsors = lazy(() => import("./sections/sponsors/Sponsors"))
const Team = lazy(() => import("./sections/team/Team"))

export default function NewsHomePage() {
  
  useStaticData();

  return (
    <>
      <Navbar variant={"Overlay"} guides={"enabled"} theme={"transparent"} pazj={"available"}/>
      <main id="scroll-index-target" className="Homepage">
        <Suspense fallback={<Spinner type={"linear"}/>}>
          <Landing/>     
          <Sponsors/>
          <Intro/>
          <News/>
          <Team/>
        </Suspense>
        <QuickScroll/>
      </main>
    </>
  );
}