import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
// import Navbar from '../../components/navbar/Navbar'
import { format } from "timeago.js"
import "./article.css"

export default function Article() {

  const [news,setNews] = useState(null)

  const params = useParams()

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await axios.get(`/api/news/${params.id}`)
      setNews(response.data)
    }
    fetchArticle();
  },[])


  return (
    <>
      {/* <Navbar currentPage={"Article"}/> */}
      {news ? <main className='article'>
        <section className='head' style={{backgroundImage: news.displayPicture}}>
          {/* <span>{news.headline}</span> */}
          <img src={news.displayPicture} alt="" />
        </section>   
        <section className="body background-pattern">
          <article>
            {news.tag.map((tag, index) => <span className='tag' key={tag + index}>{tag}</span>)}
            <span className='path'>
              <h5>
                <Link to={"/solaris_news"}>News</Link> 
              </h5>
              <h5>{news.headline}</h5>
            </span>
            <span className='info'>
              <div>           
                <box-icon type='solid' name='time-five' size="sm" color="white"></box-icon>
                <p>{format(news.createdAt)}</p>
              </div>
              <div>
                <box-icon name='user' type='solid' size="sm" color="white"></box-icon>
                <p>{<Link>{news.author}</Link>}</p>
              </div>
            </span>
            <h3 className='headline'>{news.previewText}</h3>
            <hr style={{height: "2px", color: "gray", backgroundColor: "gray", margin: "10px 0"}}/>
            <section className='content'>
              {news.content.map((item, index) => <div key={item + index}>
                {item.type === "headline" 
                ? <h4>{item.content}</h4> 
                : item.type === "picture" 
                ? <img src={item.content}/> 
                : <p>{item.content}</p>}
              </div>)}
            </section>
          </article>
        </section>
      </main> : <main><CircularProgress/></main>}
      <Footer/>
    </>  
  )
}
