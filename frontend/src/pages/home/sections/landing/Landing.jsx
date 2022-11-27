import { CircularProgress } from '@mui/material'
import React, { Suspense } from 'react'
import { useEffect } from 'react'
import "./canvas.css"
import "./landing.css"
import PixelGrid from "../../../../scripts/PixelGrid"
import BaseGrid from '../../../../scripts/BaseGrid'

export default function Landing() {

    let highPerformanceMode = true;

    useEffect(() => {
        BaseGrid()
        PixelGrid({letter: "S", startX: 10, highPerformanceMode: highPerformanceMode, grid: '[data-js-target-script="pixel-grid-layer-1"]'});
        PixelGrid({letter: "O", startX: 30, highPerformanceMode: highPerformanceMode, grid: '[data-js-target-script="pixel-grid-layer-2"]'});
        PixelGrid({letter: "L", startX: 53, highPerformanceMode: highPerformanceMode, grid: '[data-js-target-script="pixel-grid-layer-3"]'});
        PixelGrid({letter: "A", startX: 73, highPerformanceMode: highPerformanceMode, grid: '[data-js-target-script="pixel-grid-layer-4"]'});
        PixelGrid({letter: "R", startX: 98, highPerformanceMode: highPerformanceMode, grid: '[data-js-target-script="pixel-grid-layer-5"]'});
        PixelGrid({letter: "I", startX: 119, highPerformanceMode: highPerformanceMode, grid: '[data-js-target-script="pixel-grid-layer-6"]'});
        PixelGrid({letter: "S", startX: 127, highPerformanceMode: highPerformanceMode, grid: '[data-js-target-script="pixel-grid-layer-7"]'});
    },[])

    return (
        <section className='Section HomepageLanding' data-section-id="landing" data-js-target-script="pixel-grid-event-cover">
            <Suspense fallback={<CircularProgress/>}>
                <div className="CanvasGrid__container">
                        <img className='CanvasBaseLayer__image' src="/images/senna.jpg" alt="" />
                    <canvas id='canvas-pixel-grid' data-js-target-script="base-grid">
                    </canvas>
                    <canvas id="canvas-pixel-grid" data-js-target-script="pixel-grid-layer-1"></canvas>
                    <canvas id="canvas-pixel-grid" data-js-target-script="pixel-grid-layer-2"></canvas>
                    <canvas id="canvas-pixel-grid" data-js-target-script="pixel-grid-layer-3"></canvas>
                    <canvas id="canvas-pixel-grid" data-js-target-script="pixel-grid-layer-4"></canvas>
                    <canvas id="canvas-pixel-grid" data-js-target-script="pixel-grid-layer-5"></canvas>
                    <canvas id="canvas-pixel-grid" data-js-target-script="pixel-grid-layer-6"></canvas>
                    <canvas id="canvas-pixel-grid" data-js-target-script="pixel-grid-layer-7"></canvas>
                    <div className='SubHeading__container'>
                        <span className="SubHeading">ESPORTS</span>
                    </div>
                </div>

            </Suspense>
        </section>
    )
}
