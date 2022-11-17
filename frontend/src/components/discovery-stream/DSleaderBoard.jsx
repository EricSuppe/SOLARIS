import React from 'react'
import { useState } from 'react'
import propTypes from "prop-types";
import "./dsleaderBoard.css"

export default function DSleaderBoard({cardData}) {

    const [seeAll,setSeeAll] = useState(false); 

    return (
        <article className={seeAll ? 'standings__container standings__container--resize' : "standings__container"} title='Aktuelle Rankings'>
            <div className="standings_header">
                <span>Division 5.26 Leaderboard</span>
            </div>
            <hr style={{height: "1px", color: "gray"}}/>
            <div className="standings__first">
                <div className="standings__team top">
                    <box-icon name='chevron-up' color="green" size="sm"></box-icon>
                    <div className="standings__info ">
                        <div className='left'>
                            <img src={cardData.teams[0].symbol} alt="" />
                            <span data-before={cardData.teams[0].tag} className={`before:content-[attr(data-before)] team__tag`}></span>
                            <span className='team__name'>{cardData.teams[0].name}</span>
                        </div>
                        <div className='right'>
                            <span className='wins'><strong>W</strong><span>{cardData.teams[0].wins}</span></span>
                            <span className='loses'><strong>L</strong><span>{cardData.teams[0].loses}</span></span>
                        </div>  
                        <div className="history">
                            {cardData.teams[0].history.map((match, index) => 
                                <>
                                    {match === "w" ? <div key={match + index} className='win match'>{match}</div> : 
                                    match === "l" ? <div key={match + index} className='lose match'>{match}</div> : 
                                    <div key={match + index} className='tie match'>{match}</div>}
                                </>)}    
                        </div>           
                    </div> 
                </div>
                <div className="standings__team top">
                    <box-icon name='chevron-up' color="green" size="sm"></box-icon>
                    <div className="standings__info top">
                        <div className='left'>
                            <img src={cardData.teams[1].symbol} alt="" />
                            <span className="team__tag">{cardData.teams[1].tag}</span>
                            <span className='team__name'>{cardData.teams[1].name}</span>
                        </div>
                        <div className='right'>
                            <span className='wins'><strong>W</strong><span>{cardData.teams[1].wins}</span></span>
                            <span className='loses'><strong>L</strong><span>{cardData.teams[1].loses}</span></span>
                        </div>  
                        <div className="history">
                            {cardData.teams[1].history.map((match, index) => 
                                <>
                                    {match === "w" ? <div key={match + index} className='win match'>{match}</div> : 
                                    match === "l" ? <div key={match + index} className='lose match'>{match}</div> : 
                                    <div key={match + index} className='tie match'>{match}</div>}
                                </>)}    
                        </div>           
                    </div> 
                </div>
            </div>
            <div className={"standings__more " + (seeAll ? "standings__more__visible" : null)} onClick={() => setSeeAll(current => !current)}>
                {!seeAll ? <span style={{color: "white",width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>•    •    •</span> : null}
                <div className={"standings__team " + (seeAll ? "standings__visiable" : "standings__hidden")}>
                    <box-icon name='chevron-right' color="gray" size="sm"></box-icon>
                    <div className="standings__info">
                        <div className='left'>
                            <img src={cardData.teams[2].symbol} alt="" />
                            <span data-before={cardData.teams[2].tag} className={`before:content-[attr(data-before)] team__tag`}></span>
                            <span className='team__name'>{cardData.teams[2].name}</span>
                        </div>
                        <div className='right'>
                            <span className='wins'><strong>W</strong><span>{cardData.teams[2].wins}</span></span>
                            <span className='loses'><strong>L</strong><span>{cardData.teams[2].loses}</span></span>
                        </div>   
                        <div className="history">
                            {cardData.teams[2].history.map((match, index) => 
                                <>
                                    {match === "w" ? <div key={match + index} className='win match'>{match}</div> : 
                                    match === "l" ? <div key={match + index} className='lose match'>{match}</div> : 
                                    <div key={match + index} className='tie match'>{match}</div>}
                                </>)}    
                        </div>             
                    </div> 
                </div>
                <div className={"standings__team " + (seeAll ? "standings__visiable" : "standings__hidden")}>
                    <box-icon name='chevron-right' color="gray" size="sm"></box-icon>
                    <div className="standings__info">
                        <div className='left'>
                            <img src={cardData.teams[3].symbol} alt="" />
                            <span data-before={cardData.teams[3].tag} className={`before:content-[attr(data-before)] team__tag`}></span>
                            <span className='team__name'>{cardData.teams[3].name}</span>
                        </div>
                        <div className='right'>
                            <span className='wins'><strong>W</strong><span>{cardData.teams[3].wins}</span></span>
                            <span className='loses'><strong>L</strong><span>{cardData.teams[3].loses}</span></span>
                        </div> 
                        <div className="history">
                            {cardData.teams[3].history.map((match, index) => 
                                <>
                                    {match === "w" ? <div key={match + index} className='win match'>{match}</div> : 
                                    match === "l" ? <div key={match + index} className='lose match'>{match}</div> : 
                                    <div key={match + index} className='tie match'>{match}</div>}
                                </>)}    
                        </div>               
                    </div> 
                </div>
                <div className={"standings__team " + (seeAll ? "standings__visiable" : "standings__hidden")}>
                    <box-icon name='chevron-right' color="gray" size="sm"></box-icon>
                    <div className="standings__info">
                        <div className='left'>
                            <img src={cardData.teams[4].symbol} alt="" />
                            <span data-before={cardData.teams[4].tag} className={`before:content-[attr(data-before)] team__tag`}></span>
                            <span className='team__name'>{cardData.teams[4].name}</span>
                        </div>
                        <div className='right'>
                            <span className='wins'><strong>W</strong><span>{cardData.teams[4].wins}</span></span>
                            <span className='loses'><strong>L</strong><span>{cardData.teams[4].loses}</span></span>
                        </div> 
                        <div className="history">
                            {cardData.teams[4].history.map((match, index) => 
                                <>
                                    {match === "w" ? <div key={match + index} className='win match'>{match}</div> : 
                                    match === "l" ? <div key={match + index} className='lose match'>{match}</div> : 
                                    <div key={match + index} className='tie match'>{match}</div>}
                                </>)}    
                        </div>               
                    </div> 
                </div>
                <div className={"standings__team " + (seeAll ? "standings__visiable" : "standings__hidden")}>
                    <box-icon name='chevron-right' color="gray" size="sm"></box-icon>
                    <div className="standings__info">
                        <div className='left'>
                            <img src={cardData.teams[5].symbol} alt="" />
                            <span data-before={cardData.teams[5].tag} className={`before:content-[attr(data-before)] team__tag`}></span>
                            <span className='team__name'>{cardData.teams[5].name}</span>
                        </div>
                        <div className='right'>
                            <span className='wins'><strong>W</strong><span>{cardData.teams[5].wins}</span></span>
                            <span className='loses'><strong>L</strong><span>{cardData.teams[5].loses}</span></span>
                        </div> 
                        <div className="history">
                            {cardData.teams[5].history.map((match, index) => 
                                <>
                                    {match === "w" ? <div key={match + index} className='win match'>{match}</div> : 
                                    match === "l" ? <div key={match + index} className='lose match'>{match}</div> : 
                                    <div key={match + index} className='tie match'>{match}</div>}
                                </>)}    
                        </div>               
                    </div> 
                </div>
            </div>
            <div className="standings__last">
                <div className="standings__team last">
                    <box-icon name='chevron-down' color="red" size="sm"></box-icon>
                    <div className="standings__info">
                        <div className='left'>
                            <img src={cardData.teams[6].symbol} alt="" />
                            <span data-before={cardData.teams[6].tag} className={`before:content-[attr(data-before)] team__tag`}></span>
                            <span className='team__name'>{cardData.teams[6].name}</span>
                        </div>
                        <div className='right'>
                            <span className='wins'><strong>W</strong><span>{cardData.teams[6].wins}</span></span>
                            <span className='loses'><strong>L</strong><span>{cardData.teams[6].loses}</span></span>
                        </div>      
                        <div className="history">
                            {cardData.teams[6].history.map((match, index) => 
                                <>
                                    {match === "w" ? <div key={match + index} className='win match'>{match}</div> : 
                                    match === "l" ? <div key={match + index} className='lose match'>{match}</div> : 
                                    <div key={match + index} className='tie match'>{match}</div>}
                                </>)}    
                        </div>          
                    </div> 
                </div>
                <div className="standings__team last">
                    <box-icon name='chevron-down' color="red" size="sm"></box-icon>
                    <div className="standings__info">
                        <div className='left'>
                            <img src={cardData.teams[7].symbol} alt="" />
                            <span data-before={cardData.teams[7].tag} className={`before:content-[attr(data-before)] team__tag`}></span>
                            <span className='team__name'>{cardData.teams[7].name}</span>
                        </div>
                        <div className='right'>
                            <span className='wins'><strong>W</strong><span>{cardData.teams[7].wins}</span></span>
                            <span className='loses'><strong>L</strong><span>{cardData.teams[7].loses}</span></span>
                        </div>   
                        <div className="history">
                            {cardData.teams[7].history.map((match, index) => 
                                <>
                                    {match === "w" ? <div key={match + index} className='win match'>{match}</div> : 
                                    match === "l" ? <div key={match + index} className='lose match'>{match}</div> : 
                                    <div key={match + index} className='tie match'>{match}</div>}
                                </>)}    
                        </div>             
                    </div> 
                </div>
            </div>
        </article>
    )
}

DSleaderBoard.propTypes = {
    cardData: propTypes.object.isRequired,
};

