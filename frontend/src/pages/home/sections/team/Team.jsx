import React from 'react'
import "./team.css"
import GuideLines from '../../../../components/common/guideLines/Guides'
import 'boxicons'
import propTypes from "prop-types"

export default function Team() {
  
  return (
    <section className="Section HomepageTeam" data-section-id>
      <div className="Section__masked">
        <div className="Section__backgroundMask">
          <div className="Section__background">
            <GuideLines />
          </div>
        </div>
        <div className="Section__container">
          <div className="Section__layoutContainer">
            <div className="Section__layout">
              <div className="TeamGrid RowLayout">
                <div className="Team__introductionWrapper">
                  <div className="Introduction__teamName">
                    <span className='Introduction__teamName__text'>Unser League Of Legends Team: PSV Solaris Dessau (SLR)</span>
                  </div>
                </div>
                <div className="Team__statisticsWrapper" >
                  <StatisticItem iconName={"trophy"} headline={"Ranglisten Platz: 1"} description={"Unser League Of Legends Team belegt Platz 1 in der Division 5.26 der Strauß Prime League."}/>
                  <StatisticItem iconName={"trophy"} headline={"Ranglisten Platz: 1"} description={"Unser League Of Legends Team belegt Platz 1 in der Division 5.26 der Strauß Prime League."}/>
                  <StatisticItem iconName={"trophy"} headline={"Ranglisten Platz: 1"} description={"Unser League Of Legends Team belegt Platz 1 in der Division 5.26 der Strauß Prime League."}/>
                  <StatisticItem iconName={"trophy"} headline={"Ranglisten Platz: 1"} description={"Unser League Of Legends Team belegt Platz 1 in der Division 5.26 der Strauß Prime League."}/>
                </div>
                <div className="Team__membersWrapper">
                  <TeamMemberItem lane={"Toplane"} name={"Moritz"} profession={"Head Coach"}/>
                  <TeamMemberItem lane={"Toplane"} name={"Sten"} profession={"Assitant Coach"}/>
                  <TeamMemberItem lane={"Toplane"} name={"Showstealer"} profession={"Player"}/>
                  <TeamMemberItem lane={"Jungle"} name={"Xappy"} profession={"Player"}/>
                  <TeamMemberItem lane={"Midlane"} name={"Muxx"} profession={"Player"}/>
                  <TeamMemberItem lane={"Botlane"} name={"Genu"} profession={"Player"}/>
                  <TeamMemberItem lane={"Support"} name={"Enzman"} profession={"Player"}/>
                </div>
                <div className="Team__linkWrapper">
                  <div className="TeamLink__container">
                    <span className='TeamLink__container__description'>Alle Infos zum Team hier</span>
                    <button className='TeamLink__container__button'>Zum Team</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


const StatisticItem = (props) => {
  return (
    <div className="Statistics__container">
      <div className="Statistics__IconHolder">
        <box-icon name={props.iconName} size="lg" color="#ff5c00"></box-icon>
      </div>
      <div className="Statistics__Headline">
        <span>{props.headline}</span>
      </div>
      <div className="Statistics__description">
        <p>{props.description}</p>
      </div>
      <div className="Statistics__link">
      </div>
    </div> 
  )
}

const TeamMemberItem = (props) => {
  return (
    <div className="TeamMemberContainer">
      <div className="Member__laneSymbol">
        <img className='LaneSymbol' src={`/images/${props.lane}_white.svg`} alt="" />
      </div>
      <div className="Member__description">
        <div className="Member__name">{`SLR ${props.name}`}</div>
        <div className="Member__lane">{props.profession}</div>
        <div className="Member__footer">
          <ul className="Member__country">
            <li>
              <img className='Country__flag' src="/images/germany.png" alt="" />
            </li>
          </ul>
          <ul className="Member__socials">
            <li className='Member__social'>
              <box-icon name='twitter' type='logo' ></box-icon>
            </li>
            <li className='Member__social'>
              <box-icon name='instagram-alt' type='logo' ></box-icon>
            </li>
            <li className='Member__social'>
              <box-icon name='twitch' type='logo' ></box-icon>
            </li>
          </ul>
        </div>
      </div>
      <div className="Member__Champ" >
        <img className='Champ' src={`/images/Member_FavChamp_${props.name}.svg`} alt="" />
      </div>
    </div>
  )
}

StatisticItem.propTypes = {
  iconName: propTypes.string.isRequired,
  headline: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
}

TeamMemberItem.propTypes = {
  lane: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  profession: propTypes.string.isRequired,
}