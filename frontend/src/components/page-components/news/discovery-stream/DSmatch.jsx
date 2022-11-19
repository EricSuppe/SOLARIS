import React from 'react'
import propTypes from "prop-types";
import Logo from "../../../../assets/PL_Logo_white.jpg"
import "./dsmatch.css"

export default function DSmatch({cardData}) {

    return (
        <article className='matchResult__container' title='Spieltag Ergebnis'>
            <section className="matchResult__top">
                <div className="middle">Spieltag: {cardData.day}</div>
            </section>
            <hr style={{height: "1px", color: "gray"}}/>
            <section className="matchResult__content">
                <div className="left">
                    <img src={cardData.teams[0].symbol} alt="" />
                    <span>{cardData.teams[0].tag}</span>
                </div>
                <div className="middle">
                    <span className={cardData.result[0] > cardData.result[1] ? "winner" : "loser"}>{cardData.result[0]}</span>
                    <span>{cardData.winner === 0 
                        ? <box-icon type='solid' name='left-arrow' color="#ff5c00" size="sm"></box-icon> 
                        : cardData.winner === 1 
                        ? <box-icon name='right-arrow' type='solid' color="#ff5c00" size="sm"></box-icon> 
                        : <box-icon type='solid' name='up-arrow' color="gray" size="sm"></box-icon>}</span>
                    <span className={cardData.result[1] > cardData.result[0] ? "winner" : "loser"}>{cardData.result[1]}</span>
                </div>
                <div className="right">
                    <img src={cardData.teams[1].symbol} alt="" />
                    <span>{cardData.teams[1].tag}</span>
                </div>
            </section>
            <hr style={{height: "1px", color: "gray"}}/>
            <section className="matchResult__bottom">
                <img src={Logo} alt="" />
                <span>• Ergenis des {cardData.day}. Spieltags der Prime League</span>
            </section>
        </article>
    )
}

DSmatch.propTypes = {
    cardData: propTypes.object.isRequired,
};

