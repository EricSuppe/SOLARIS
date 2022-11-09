import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import NewsCard from '../../components/newscard/NewsCard';
import "./news.css"

export default function News() {

    const [news,setNews] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await axios.put(`/api/news/`, {limit: undefined})
                setNews(response.data)            
            } catch(err) {
                console.log(err);
            }         
        }
        fetchApi();
    },[])

  return (
    <>
        <Navbar currentPage={"News"}/>
        <main className='news background-pattern'>
            {news ? <section className='featured-news' style={{backgroundImage: `url("${news[0].displayPicture}")`}}>
                {news ? <>
                    <Link to={`/solaris_news/article/${news[0]._id}`}>
                        <div className='header'>
                            {news[0].tag ? news[0].tag.map((tag, index) => 
                                <span className='header-tags' key={tag + index}>{tag}</span>
                                ) : "Neu"}
                            <h1 className='header-headline'>{`"${news[0].headline}"`}</h1>
                            <p className='header-text'>{news[0].previewText}</p>
                        </div>
                    </Link>
                </> : <div>Loading...</div>}
            </section> : null}
            <section className='news-display'>
                {news ? news.map((news, index) => <>{index !== 0 ? 
                NewsCard(news={news}, index={index}) : null}</>
                ) : <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}><CircularProgress style={{color: "#ff5c00"}}/>Loading...</div>}
            </section>
        </main>
        <Footer/>
    </>
  )
}