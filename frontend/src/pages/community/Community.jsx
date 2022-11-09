import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./community.css"

export default function Community() {
  return (
    <>
        <Navbar currentPage={"Community"}/>
        <main className='community background-pattern'>
            <section className='community-wrapper'>
                {communityItem({link: "https://discord.gg/piltover", image: "/images/discord.svg", text: "Tritt dem Community-Discord bei", desc: <p className='desc'>Hab Spaß mit uns, guck dir unsere Games mit Freunden an oder lern neue Leute auf unserem <strong style={{color: "#404eed", padding: "0 5px"}}>Community Discord</strong>  kennen.</p>})}
                {communityItem({link: "https://twitter.com/psvsolaris", image: "/images/twitter.svg", text: "Bleib immer auf dem neusten Stand", desc: <p className='desc'>Updates, Game Standings und Memes - alles was du wissen musst findest du auf unserem <strong style={{color: "#1da1f3", padding: "0 5px"}}>Twitter Account</strong>.</p>})}
                {communityItem({link: "https://www.youtube.com/channel/UCsxXMk672K_tKP223T4zKPA", image: "/images/youtube.svg", text: "Guck dir unsere Highlights an", desc: <p className='desc'>Guck dir die <strong style={{color: "#ff5c00", padding: "0 5px"}}>Highlights</strong>  unsere vergangen Games, entspannten Community-Content und weitere Videos auf unserem <strong style={{color: "#ff1456", padding: "0 5px"}}> Youtube Channel</strong> an.</p>})}
                {communityItem({link: "https://instagram.com/psvsolaris", image: "/images/instagram.svg", text: "Folge uns auf Instagramm", desc: <p className='desc'>Folg uns auf unserem <strong style={{color: "#e01a6a", padding: "0 5px"}}>Instagramm Account</strong>  für Updates rund um unser Team, lustige Bilder und mehr.</p>})}
                {communityItem({link: "https://www.twitch.tv/psvsolarisdessau", image: "/images/twitch.svg", text: "Sei LIVE auf Twitch dabei", desc: <p className='desc'>Alle unsere Games werden <strong style={{color: "red", padding: "0 5px"}}>LIVE</strong> gecastet und auf unserem <strong style={{color: "#9147ff", padding: "0 5px"}}>Twitch Channel</strong>  übertragen. Schau vorbei und habe eine entspannte Zeit mit uns!</p>})}
            </section>
        </main>
        <Footer/>
    </>
  )
}

const communityItem = (props) => {
    return (
        <a className="community-container" href={props.link}>
            <img className='community-head' src={props.image} alt="" />
            <div className="community-body">
                <span><p>{props.text}</p></span>
                <hr style={{height: "1px", color: "gray", backgroundColor: "gray", margin: "10px 0"}}/>
                {props.desc}
            </div>
        </a>
    )
}