import React from 'react'
import "./sponsors.css"
import getSponsors from '../../../../static/sponsors'
import GuideLines from '../../../../components/common/guideLines/Guides'
import { Link } from 'react-router-dom'

export default function Sponsors() {
    return (
        <section className="Section HomepageSponsors" data-section-id>
          <div className="Section__masked">
            <div className="Section__backgroundMask">
              <div className="Section__background">
                <GuideLines />
              </div>
            </div>
            <div className="Section__container">
              <div className="Section__layoutContainer">
                <div className="Section__layout" data-guide-top data-guide-bottom>
                  <div className="SponsorLogoGrid RowLayout">
                    {getSponsors().map((sponsor, index) => <Link className='SponsorLogo' key={index} to={sponsor.link}><img className='SponsorLogoImage' src={`images/${sponsor.symbol}`} alt={sponsor.name} title={sponsor.name}/></Link>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
