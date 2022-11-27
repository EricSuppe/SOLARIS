import React from 'react'
import "./sponsors.css"
import getSponsors from '../../../../static/sponsors'
// import GuideLines from '../../../../components/common/guideLines/Guides'
import { Link } from 'react-router-dom'

export default function Sponsors() {
    return (
      <section className="Section HomepageSponsors" data-section-id aria-label='sponsors'>
        <div className="Section__masked">
          <div className="Section__backgroundMask">
            <div className="Section__background">
              {/* <GuideLines /> */}
            </div>
          </div>
          <div className="Section__container BgVariant--medium">
            <div className="Section__layoutContainer Section__layoutContainer--full">
              <div className="Section__layout">
                <div className="SponsorLogoGrid FlexLayout">
                  {getSponsors().map((sponsor, index) => (
                    <Link className="SponsorLogo" key={index} to={sponsor.link}>
                      <img
                        className="SponsorLogoImage"
                        src={`images/${sponsor.symbol}`}
                        alt={sponsor.name}
                        title={sponsor.name}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
