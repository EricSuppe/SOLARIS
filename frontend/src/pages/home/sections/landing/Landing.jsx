import { CircularProgress } from '@mui/material'
import React, { Suspense } from 'react'
import { useEffect } from 'react'
import "./canvas.css"
import "./landing.css"
import PixelGrid from "../../../../scripts/PixelGrid"
import BaseGrid from '../../../../scripts/BaseGrid'

export default function Landing() {

    let animate = true;

    useEffect(() => {
        BaseGrid();
        PixelGrid({letter: "SOLARIS", startX: 12, highPerformanceMode: animate, grid: '[data-js-target-script="pixel-grid-layer-1"]'});
        fadeIn();
        setTimeout(stretchSubHeading, animate ? 3500 : 0)
    },[])

    const fadeIn = () => {
        document.getElementById("image__baselayer--transfrom").classList.add("CanvasBaseLayer__image--fadeIn")
    }

    const stretchSubHeading = () => {
        document.getElementById("subHeading--transfrom").classList.add("SubHeading--fadeIn")
    }

    return (
        <section className='Section HomepageLanding' data-section-id="landing" data-js-target-script="pixel-grid-event-cover">
            <Suspense fallback={<CircularProgress/>}>
                <div className="CanvasGrid__container">
                        <img id='image__baselayer--transfrom' className='CanvasBaseLayer__image' src="/images/senna.jpg" alt="league of legends champion senna" />
                    <canvas id='canvas-pixel-grid' data-js-target-script="base-grid"></canvas>
                    <canvas id="canvas-pixel-grid" data-js-target-script="pixel-grid-layer-1"></canvas>
                    <div className='SubHeading__container'>
                        <span id='subHeading--transfrom' className="SubHeading">ESPORTS</span>
                    </div>
                </div>
            </Suspense>
        </section>
    )
}
