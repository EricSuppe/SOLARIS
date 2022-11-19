import React, { useEffect } from 'react'
import GuideLines from '../../components/common/guideLines/GuideLines';
import useStaticData from '../../hooks/useStaticData';
import "./newHome.css"


export default function NewsHomePage() {

  
  useEffect(() => {
    useStaticData();
    canvasShade();
  }, []);

  const canvasShade = () => {
    var c = document.getElementById('canv');
    var $ = c.getContext('2d');
    var col = function(x, y, r, g, b) {
      $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      $.fillRect(x, y, 1,1);
    }
    var R = function() {
      // return(Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
      return 255
    }
    var G = function(x, y, t) {
      return(Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)) - 100);
    }
    var B = function() {
      return(Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ) - 125);
    }
    var t = 0; var x; var y;
    var run = function() {
      for(x = 0; x <= 35; x++) {
        for(y = 0; y <= 35; y ++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.02;
      window.requestAnimationFrame(run);
    }
    run();
  }

  return (
    <main className='newHome'>
        
      <section className="hero">
        <div className="section__masked">
          <div className="section__backgroundMask" data-attribute-guides>
            <GuideLines/>
          </div>
          <div className="section__container">
            <div className="section__layout__container">
              <div className="section__layout">
                <div className="column__layout" data-columns="2,2">
                  <section className='homepage__hero__title'>
                    <header className='hero__title__header'>
                       <div className="hero__headline__container">
                        <h1 className='hero__headline' data-text-key="home-hero-header"></h1>
                        <p className='hero__headline' aria-hidden="true" data-text-key="home-hero-header" data-overlay></p>
                      </div>
                    </header>
                    <div className="hero__title__body" data-text-key="home-hero-subheading"></div>
                    <div className="canvas-container">
                      <canvas id="canv" width="32" height="32"/>
                    
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>

      </section>
        
    </main>
  )
}
