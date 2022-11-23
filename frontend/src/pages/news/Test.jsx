import React, { useEffect } from 'react'
import Navbar from '../../components/common/navigation/Navbar'
import "./test.css"

export default function Test() {

    useEffect(() => {
        canvasShade();
      }, []);

    const canvasShade = () => {
        var c = document.getElementById('fading-canvas');
        var $ = c.getContext('2d');
        var col = function(x, y, r, g, b) {
          $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          $.fillRect(x, y, 1,1);
        }
        var R = function() {
          return(Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
        }
        var G = function(x, y, t) {
          return(Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)) - 100);
        }
        var B = function() {
          return(Math.floor(0 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ) - 125);
        }
        var t = 0; var x; var y;
        var run = function() {
          for(x = 0; x <= 35; x++) {
            for(y = 0; y <= 35; y ++) {
              col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
            }
          }
          t = t + 0.04;
          window.requestAnimationFrame(run);
        }
        run();
      }

    return (
        <>
            <Navbar variant={"Overlay"} guides={"disabled"} theme={"transparent"}/>
            <main className="Newspage">
                <div className='Newspage__hero'>
                    <div className="NewspageCanvas__container">
                        <canvas id="fading-canvas" width="32" height="32"/>
                        <div className="canvas__background"></div>
                    </div>
                </div>
                <div className="Newspage__background__container" data-pattern-type-raster></div>
                <div className="Newspage__content">
                    <div className="Newspage__sliderWrapper">

                    </div>
                    <section className='Newspage__landscape-transition'>
                        <div className="Newspage__landscape__container">
                            <img className='Newspage__landscape' src="/images/vectorpaint.svg" alt="" />
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
