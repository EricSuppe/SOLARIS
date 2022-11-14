import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react'
import NewsItemProvider from '../../components/NewsBoard/newsItemProvider/NewsItemProvider';
import NewsOnLoadProvider from '../../components/NewsBoard/newsOnLoadProvider/NewsOnLoadProvider';
import Footer from '../../components/footer/Footer';
// import Navbar from '../../components/navbar/Navbar';
import "./news.css"
import NewsFilter from '../../components/newsFilter/NewsFilter';
import Slider from '../../components/slider/Slider';
// import { AuthContext } from '../../context/AuthContext';
import AdminSideBar from '../../components/adminSideBar/AdminSideBar';

export default function News() {

    // const {user} = useContext(AuthContext);

    const [editMode,setEditMode] = useState(false)

    const [activeFilter,setActiveFilter] = useState([
        {name: "newsArticle", active: false},
        {name: "matchResult", active: false},
        {name: "standings", active: false},
        {name: "twitter", active: false},
        {name: "youtube", active: false},
        {name: "twitch", active: false},
        {name: "instagram", active: false},
    ])

    const [tagFilter,setTagFilter] = useState([
        {name: "Prime League", active: false},
        {name: "League Of Legends", active: false},
    ])

    const [filterArr,setFilterArr] = useState([]);
    const [tagFilterArr,setTagFilterArr] = useState([]);

    const [cardData,setCardData] = useState(null);

    useEffect(() => {
        activeFilter.map((filter) => {
            filter.active 
                ? (!filterArr.includes(filter.name) ? setFilterArr((current) => [...current,filter.name]) : null) 
                : (filterArr.includes(filter.name) ? setFilterArr((current) => current.filter((value) => value !== filter.name)) : null)
        }) 
    },[activeFilter])

    useEffect(() => {
        tagFilter.map((filter) => {
            filter.active 
                ? (!tagFilterArr.includes(filter.name) ? setTagFilterArr((current) => [...current,filter.name]) : null) 
                : (tagFilterArr.includes(filter.name) ? setTagFilterArr((current) => current.filter((value) => value !== filter.name)) : null)
        })
    },[tagFilter])

    useEffect(() => {
        const fetchApi = async () => {     
            try {
                const response = await axios.put(`/api/news/`, {limit: 10})
                setCardData(response.data)
                setCardData(current => [...current,{type: "standings", tag:["Prime League", "League Of Legends"], teams: [
                    {name: "Solaris", tag: "SLR", wins: 10, loses: 0, history:["w", "w", "w"], symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "EKO",  wins: 10, loses: 0, history:["w", "l", "w"], symbol: "/images/Logo.svg"},
                    {name: "Piltover", tag: "PTO",  wins: 6, loses: 4, history:["l", "w", "n"], symbol: "/images/Logo.svg"},
                    {name: "Putin Clan", tag: "RMS",  wins: 5, loses: 5, history:["l", "w", "w"], symbol: "/images/Logo.svg"},
                    {name: "Mamamia", tag: "MSN",  wins: 3, loses: 7, history:["w", "l", "l"], symbol: "/images/Logo.svg"},
                    {name: "Human Apex Predator", tag: "APX",  wins: 1, loses: 9, history:["l", "n", "w"], symbol: "/images/Logo.svg"},
                    {name: "Ka Digga", tag: "Kad",  wins: 1, loses: 9, history:["l", "w", "l"], symbol: "/images/Logo.svg"},
                    {name: "UWU", tag: "UWU",  wins: 0, loses: 10, history:["l", "l", "n"], symbol: "/images/Logo.svg"},]}])
                setCardData(current => [...current,{type: "matchResult", day: 5, winner: 0, result: [2,0], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "EKO", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 4, winner: null, result: [1,1], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "PTO", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
                setCardData(current => [...current,{type: "matchResult", day: 3, winner: 1, result: [0,2], teams: [
                    {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                    {name: "Eko Tyrants", tag: "SVG", symbol: "/images/Logo.svg"}]}])
            } catch(err) {
                console.log(err);
            }         
        }
        fetchApi()
    },[])

  return (
    <div id='newsroot' data-root-id="newsroot">
        {/* <Navbar/> */}
        <AdminSideBar tools={["sliderEditor"]} setEditMode={setEditMode}/>
        <div className='outer-wrapper'>
            <section className="non-collapsible-section slider-wrapper" data-section-id="newsslider">
                <Slider/>
            </section>
                <NewsFilter getFilter={activeFilter} setFilter={setActiveFilter} getTagFilter={tagFilter} setTagFilter={setTagFilter} getActiveTagFilter={tagFilterArr}/>
            <section className='collapsable-section' data-section-id="discovery-stream-wrapper">
                <div className="ds-layout ds-layout-breakpoint ">
                    {cardData 
                    ? cardData.map((cardData) => 
                        filterArr.length > 0 && tagFilterArr.length > 0 
                            ? cardData.tag 
                                ? cardData.tag.map((tag) => tagFilterArr.includes(tag)).some(values => values === true) && filterArr.includes(cardData.type)
                                    ? <NewsItemProvider cardData={cardData} editMode={editMode}/> 
                                    : null
                                : null
                            :
                        filterArr.length == 0 && tagFilterArr.length > 0 
                            ? cardData.tag  
                                ? cardData.tag.map((tag) => tagFilterArr.includes(tag)).some(values => values === true)
                                    ? <NewsItemProvider cardData={cardData} editMode={editMode}/>
                                    : null
                                : null 
                            :             
                        filterArr.length > 0 && tagFilterArr.length == 0 
                            ? filterArr.includes(cardData.type) 
                                ? <NewsItemProvider cardData={cardData} editMode={editMode}/>
                                : null 
                            : <NewsItemProvider cardData={cardData} editMode={editMode}/>) 
                    : NewsOnLoadProvider({value: 10})}
                </div>
            </section>
            <section className="news__bot"></section>
            <Footer/>
        </div>
    </div>
  )
}
