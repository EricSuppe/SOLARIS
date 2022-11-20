import React from 'react'
import { useRef } from 'react';
import { useContext} from 'react';
import axios from "axios";
import 'boxicons'
import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/footer/Footer.jsx'
import { useCountdown } from '../../hooks/useCountdown.jsx';
import { AuthContext } from '../../context/AuthContext.js';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import getSponsors from '../../static/sponsors.jsx';
import getTeamMember from '../../static/teammember.jsx';

import "./home.css"
// import NewsCard from '../../components/newscard/NewsCard.jsx';
// import { CircularProgress } from '@mui/material';

export default function Home() {
  const date = useRef();

  const { user } = useContext(AuthContext);

  // const [news,setNews] = useState()
  const [time, setTime] = useState(new Date().getTime());

  const timer = useCountdown(new Date(time).getTime());

  useEffect(() => {
    // const fetchNews = async () => {
    //   const response = await axios.put("/api/news/", {limit: 4})
    //   setNews(response.data);
    // }
    const fetchTimer = async () => {
      const response = await axios.get("/api/timer/");
      setTime(response.data[0].time);
    };
    // fetchNews();
    fetchTimer();
  }, []);

  const handleTimerChange = async (e) => {
    e.preventDefault();
    await axios.put("/api/timer/", { time: date.current.value });
  };

  return (
    <>
      <Navbar currentPage={"Home"} />
      <main className="home">
        <section
          className="head"
          style={
            window.innerWidth < 1000
              ? { backgroundImage: "url('images/Background-mobile.svg')" }
              : { backgroundImage: "url('images/Background-pattern.svg')" }
          }
        >
          <div
            className="champion"
            style={{
              backgroundImage: "url('images/Background-Irelia-only.svg')",
            }}
          ></div>
          <span className="head-welcome">
            <h2>we are</h2>
            <h1>Solaris</h1>
          </span>
          <span className="head-imprint">
            <h4>
              <Link to="/impressum">Imprint</Link>
            </h4>
            <h4>
              <Link to="/datenschutz">Privacy Policy</Link>
            </h4>
            <ul>
              <li>
                <a href="https://twitter.com/psvsolaris">
                  <box-icon
                    name="twitter"
                    type="logo"
                    size={window.innerWidth < 500 ? "sm" : "md"}
                    color="#ff5c00"
                  />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/psvsolaris">
                  <box-icon
                    type="logo"
                    name="twitch"
                    size={window.innerWidth < 500 ? "sm" : "md"}
                    color="#ff5c00"
                  ></box-icon>
                </a>
              </li>
              <li>
                <a href="https://discord.gg/piltover">
                  <box-icon
                    name="discord-alt"
                    type="logo"
                    size={window.innerWidth < 500 ? "sm" : "md"}
                    color="#ff5c00"
                  />
                </a>
              </li>
            </ul>
          </span>
        </section>
        <section className="sponsors">
          <ul>
            {getSponsors().map((sponsor, index) => (
              <li style={{ textDecoration: "none" }} key={sponsor + index}>
                <a href={sponsor.link}>
                  <img src={`images/${sponsor.symbol}`} alt="sponsor-symbol" />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="team background-pattern">
          <article className="team-desc">
            <h3>League of Legends</h3>
            <h4>Our Team</h4>
            <p>
              Solaris ist eine neue E-Sport-Organisation, welche momentan in
              Division 5 der Strauss Prime League vertreten ist
            </p>
            <p>Solaris will rise, expect us!</p>
          </article>
          <ul className="team-player">
            {getTeamMember().map((member, index) => (
              <li key={member + index}>
                <div className="icon-box">
                  <img
                    src={
                      member.symbol !== "" ? `/images/${member.symbol}` : null
                    }
                    alt="lane-symbol"
                  />
                </div>
                <a href={member.opgg}>
                  <span>{member.lane}</span>
                  <span>{member.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="timer">
          <h3>next game starts in:</h3>
          <div>{timer}</div>
          {user ? (
            <form onSubmit={handleTimerChange}>
              <input type="date" required ref={date} />
              <button>Zeit Ändern</button>
            </form>
          ) : null}
        </section>
        {/* <section className='news background-pattern'>
          <div className="news-wrapper">
            {news ? news.map((news, index) => 
              NewsCard(news={news}, index={index})
            ) : <div><CircularProgress style={{color: "#ff5c00"}}/></div> }
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}