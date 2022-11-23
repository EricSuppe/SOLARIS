import React from 'react'
import "./intro.css"
import GuideLines from '../../../../components/common/guideLines/Guides'

export default function Intro() {
    return (
        <section className="Section HomepageIntro" data-section-id>
          <div className="Section__masked">
            <div className="Section__backgroundMask">
              <div className="Section__background">
                <GuideLines />
              </div>
            </div>
            <div className="Section__container">
              <div className="Section__layoutContainer">
                <div className="Section__layout">
                  <div className="IntroGrid RowLayout">
                    <div className='Description'>
                      <p className='Description__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aliquid soluta distinctio nulla repellat quidem illo nisi inventore? Iste inventore veniam possimus explicabo eveniet accusamus repudiandae magni fuga necessitatibus rem?</p>
                    </div>
                      <div className='Description__link'>
                        <span className='Description__linkText'>Zum aktuellsten Ereignis</span>
                        <button className='Description__linkButton'></button>
                      </div>
                    <div className="xxx"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
