import React, { useEffect } from 'react'
import GuideLines from '../../components/common/guideLines/Guides';
import useStaticData from '../../hooks/useStaticData';
import "./newHome.css"
import "./homepage-sections.css"


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
    <main className="newHome">
      <div className='Homepage__background'>
        <div className="canvas-container">
          <canvas id="canv" width="32" height="32" />
        </div>
      </div>
      <div className='Homepage__middle'>
        <div className="hero__headline__container">
          <h1
            className="hero__headline"
            data-text-key="home-hero-header"
          ></h1>
          <p
            className="hero__headline"
            aria-hidden="true"
            data-text-key="home-hero-header"
            data-overlay
          ></p>
        </div>
      </div>
      <div className="Homepage__content">
        <section className='landscape-transition'>
          <div className="landscape__container">
            <img className='landscape' src="/images/vectorpaint.svg" alt="" />
          </div>
        </section>
        <section className="Section HomepageHero" data-section-id>
          <div className="Section__masked">
            <div className="Section__backgroundMask">
              <div className="Section__background">
                <GuideLines />
              </div>
            </div>
            <div className="Section__container">
              <div className="Section__layoutContainer">
                <div className="Section__layout">
                  <div className="column__layout" data-columns="2,2">
                    {/* <section className="homepage__hero__title">
                      <header className="hero__title__header">
                        <div className="hero__headline__container">
                          <h1
                            className="hero__headline"
                            data-text-key="home-hero-header"
                          ></h1>
                          <p
                            className="hero__headline"
                            aria-hidden="true"
                            data-text-key="home-hero-header"
                            data-overlay
                          ></p>
                        </div>
                      </header>
                      <div
                        className="hero__title__body"
                        data-text-key="home-hero-subheading"
                      ></div>
                    </section> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <section className='sponsors' data-section-id>
        <div className="Section__masked">
          <div className="Section__backgroundMask">
            <div className="Section__background">
              <GuideLines/>
            </div>
          </div>
        </div>
      </section>
      <section className='sponsors' data-section-id>
        <div className="Section__masked">
          <div className="Section__backgroundMask">
            <GuideLines/>
          </div>
        </div>
      </section> */}
    </main>
  );
}

// background
// hero
// content
