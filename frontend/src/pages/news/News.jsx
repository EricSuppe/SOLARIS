import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer';
// import Navbar from '../../components/navbar/Navbar';
import "./news.css"
import NewsFilter from '../../components/page-components/news/newsFilter/NewsFilter';
import HotSlider from '../../components/page-components/news/slider/Hot-slider';
// import { AuthContext } from '../../context/AuthContext';
import AdminSideBar from '../../components/adminSideBar/AdminSideBar';
import DiscoveryStream from '../../components/page-components/news/discovery-stream/DiscoveryStream';
import DiscoveryStreamSkeleton from '../../components/page-components/news/discovery-stream-skeleton/DiscoveryStreamSkeleton';

export default function News() {

    // const {user} = useContext(AuthContext);

    // const [editMode,setEditMode] = useState(false)

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
                setCardData(current => [...current,{_id: "123456789", headline: "Diese Überschrift ist toll", author: "63355a5090ae11ff18c87aba", createdAt: "2022-11-07T16:30:18.692+00:00", displayPicture: "/images/article_hover.png", previewText: "Dem PSV gelingt der Auftakt in den Winter Split. Nach einer starken Performance blickt man nach vorne.", tag: ["Prime League", "League Of Legends"], type: "DSarticle" , content: [
                    {type: "text", content: "Das Team des PSV Solaris Dessau hat sein Debüt perfekt gestaltet. Mit einem 2:0 konnte man sichgegen NSM Mamamia durchsetzen und hat der Liga gezeigt, womit man zu rechnen hat."},
                    {type: "headline", content: "Der Carry aus dem Jungle"},
                    {type: "text", content: "Das erste Spiel begann zunächst ruhig bis in der fünften Minuten ein erfolgreicher Countergank von  Solaris-Jungler Xappy zu einem Doppelkill führte. Dieser nutzte seinen Goldlead aus um sowohl den ersten Drachen als auch den ersten Herold aufs Konto der Dessauer zu verbuchen. Auch auf der Botlane setzte man ein Zeichen, nachdem Support enzman mit Amumu eine Q-R-Combo auf die gegnerische Yuumi gelang und somit einen Pick sicherte. Mit dem daraus resultierenden Druck ließ sich Drache Nummer zwei erkämpfen und das Spiel war nun fest in der Hand des PSV Solaris Dessau. Ein Solokill von Showstealer auf der Toplane sowie ein weiterer Gank von Xappy sicherte den ersten Turm des Spiels. Von dem 6k-Goldrückstand konnte sich NSM nicht mehr erholen. Ein Teamfight um den Soulpoint, der mit 4:1 gewonnen werden konnte, brachte die Vorentscheidung. Ein cleanes Ace beim Kampf um die Drachenseele schlug den letzten Nagel in den Sarg. Solaris sicherte sich Baron Nashor und zerstörte 2 Inhibitoren. Ein weiteres Ace am Ahnendrachen brachteauch den Nexus zu fall. Der erste Sieg war perfekt."},
                    {type: "headline", content: "Ein teamfightlastiges Spiel"},
                    {type: "text", content: "Das zweite Spiel startete erneut ruhig bis in der fünften Minute wieder ein Gank von Xappy auf der Midlane Solaris nach vorne brachte. Zeitgleich gelang es der Botlane im 2 gegen 2 den gegnerischen ADC niederzuringen. Zwar musste man den ersten Drachen durch einen Catch auf Midlaner muxx abgeben, dies brachte das Team allerdings nicht aus dem Spiel. Im Gegenteil sogar: man findet einen Skirmish im Drachenpit und sichert sich 3 Kills, während man nur den Supporter abgeben muss. Nach einer starken Flash-Ult von Amumu vor dem zweiten Drachen gelingt es Solaris 3 Kills zu finden und sich damit einen Lead von 3k Gold aufzubauen. Nach einem weiteren Catch schafft man es alle äußeren Türme von NSM einzureißen. Mit der daraus resultierenden 6k Gold Führung schafft man es den dritten Drachen und Baron Nashor für sich zu beanspruchen. Mit diesem lassen sich alle inneren Türme aufbrechen. Ein Teamfight am gegnerischen Blue Buff bringt den ersten Inhibitor des Spiels zum Fallen, ein weiterer den Nash. Mit diesem bricht man auch den dritten Inhibitor auf und kann das zweite Spiel beenden."},
                ] }])
                setCardData(current => [...current,{_id: "12345678", headline: "Diese Überschrift ist toll", author: "63355a5090ae11ff18c87aba", createdAt: "2022-11-07T16:30:18.692+00:00", displayPicture: "/images/News-Background.svg", previewText: "Dem PSV gelingt der Auftakt in den Winter Split. Nach einer starken Performance blickt man nach vorne.", tag: ["Prime League", "League Of Legends"], type: "DSarticle" , content: [
                    {type: "text", content: "Das Team des PSV Solaris Dessau hat sein Debüt perfekt gestaltet. Mit einem 2:0 konnte man sichgegen NSM Mamamia durchsetzen und hat der Liga gezeigt, womit man zu rechnen hat."},
                    {type: "headline", content: "Der Carry aus dem Jungle"},
                    {type: "text", content: "Das erste Spiel begann zunächst ruhig bis in der fünften Minuten ein erfolgreicher Countergank von  Solaris-Jungler Xappy zu einem Doppelkill führte. Dieser nutzte seinen Goldlead aus um sowohl den ersten Drachen als auch den ersten Herold aufs Konto der Dessauer zu verbuchen. Auch auf der Botlane setzte man ein Zeichen, nachdem Support enzman mit Amumu eine Q-R-Combo auf die gegnerische Yuumi gelang und somit einen Pick sicherte. Mit dem daraus resultierenden Druck ließ sich Drache Nummer zwei erkämpfen und das Spiel war nun fest in der Hand des PSV Solaris Dessau. Ein Solokill von Showstealer auf der Toplane sowie ein weiterer Gank von Xappy sicherte den ersten Turm des Spiels. Von dem 6k-Goldrückstand konnte sich NSM nicht mehr erholen. Ein Teamfight um den Soulpoint, der mit 4:1 gewonnen werden konnte, brachte die Vorentscheidung. Ein cleanes Ace beim Kampf um die Drachenseele schlug den letzten Nagel in den Sarg. Solaris sicherte sich Baron Nashor und zerstörte 2 Inhibitoren. Ein weiteres Ace am Ahnendrachen brachteauch den Nexus zu fall. Der erste Sieg war perfekt."},
                    {type: "headline", content: "Ein teamfightlastiges Spiel"},
                    {type: "text", content: "Das zweite Spiel startete erneut ruhig bis in der fünften Minute wieder ein Gank von Xappy auf der Midlane Solaris nach vorne brachte. Zeitgleich gelang es der Botlane im 2 gegen 2 den gegnerischen ADC niederzuringen. Zwar musste man den ersten Drachen durch einen Catch auf Midlaner muxx abgeben, dies brachte das Team allerdings nicht aus dem Spiel. Im Gegenteil sogar: man findet einen Skirmish im Drachenpit und sichert sich 3 Kills, während man nur den Supporter abgeben muss. Nach einer starken Flash-Ult von Amumu vor dem zweiten Drachen gelingt es Solaris 3 Kills zu finden und sich damit einen Lead von 3k Gold aufzubauen. Nach einem weiteren Catch schafft man es alle äußeren Türme von NSM einzureißen. Mit der daraus resultierenden 6k Gold Führung schafft man es den dritten Drachen und Baron Nashor für sich zu beanspruchen. Mit diesem lassen sich alle inneren Türme aufbrechen. Ein Teamfight am gegnerischen Blue Buff bringt den ersten Inhibitor des Spiels zum Fallen, ein weiterer den Nash. Mit diesem bricht man auch den dritten Inhibitor auf und kann das zweite Spiel beenden."},
                ] }])
                setCardData(current => [...current,{_id: "12345678", headline: "Diese Überschrift ist toll", author: "63355a5090ae11ff18c87aba", createdAt: "2022-11-07T16:30:18.692+00:00", displayPicture: "/images/News-Background-noText.svg", previewText: "Dem PSV gelingt der Auftakt in den Winter Split. Nach einer starken Performance blickt man nach vorne.", tag: ["Prime League", "League Of Legends"], type: "DSarticle" , content: [
                    {type: "text", content: "Das Team des PSV Solaris Dessau hat sein Debüt perfekt gestaltet. Mit einem 2:0 konnte man sichgegen NSM Mamamia durchsetzen und hat der Liga gezeigt, womit man zu rechnen hat."},
                    {type: "headline", content: "Der Carry aus dem Jungle"},
                    {type: "text", content: "Das erste Spiel begann zunächst ruhig bis in der fünften Minuten ein erfolgreicher Countergank von  Solaris-Jungler Xappy zu einem Doppelkill führte. Dieser nutzte seinen Goldlead aus um sowohl den ersten Drachen als auch den ersten Herold aufs Konto der Dessauer zu verbuchen. Auch auf der Botlane setzte man ein Zeichen, nachdem Support enzman mit Amumu eine Q-R-Combo auf die gegnerische Yuumi gelang und somit einen Pick sicherte. Mit dem daraus resultierenden Druck ließ sich Drache Nummer zwei erkämpfen und das Spiel war nun fest in der Hand des PSV Solaris Dessau. Ein Solokill von Showstealer auf der Toplane sowie ein weiterer Gank von Xappy sicherte den ersten Turm des Spiels. Von dem 6k-Goldrückstand konnte sich NSM nicht mehr erholen. Ein Teamfight um den Soulpoint, der mit 4:1 gewonnen werden konnte, brachte die Vorentscheidung. Ein cleanes Ace beim Kampf um die Drachenseele schlug den letzten Nagel in den Sarg. Solaris sicherte sich Baron Nashor und zerstörte 2 Inhibitoren. Ein weiteres Ace am Ahnendrachen brachteauch den Nexus zu fall. Der erste Sieg war perfekt."},
                    {type: "headline", content: "Ein teamfightlastiges Spiel"},
                    {type: "text", content: "Das zweite Spiel startete erneut ruhig bis in der fünften Minute wieder ein Gank von Xappy auf der Midlane Solaris nach vorne brachte. Zeitgleich gelang es der Botlane im 2 gegen 2 den gegnerischen ADC niederzuringen. Zwar musste man den ersten Drachen durch einen Catch auf Midlaner muxx abgeben, dies brachte das Team allerdings nicht aus dem Spiel. Im Gegenteil sogar: man findet einen Skirmish im Drachenpit und sichert sich 3 Kills, während man nur den Supporter abgeben muss. Nach einer starken Flash-Ult von Amumu vor dem zweiten Drachen gelingt es Solaris 3 Kills zu finden und sich damit einen Lead von 3k Gold aufzubauen. Nach einem weiteren Catch schafft man es alle äußeren Türme von NSM einzureißen. Mit der daraus resultierenden 6k Gold Führung schafft man es den dritten Drachen und Baron Nashor für sich zu beanspruchen. Mit diesem lassen sich alle inneren Türme aufbrechen. Ein Teamfight am gegnerischen Blue Buff bringt den ersten Inhibitor des Spiels zum Fallen, ein weiterer den Nash. Mit diesem bricht man auch den dritten Inhibitor auf und kann das zweite Spiel beenden."},
                ] }])
                setCardData(current => [...current,{_id: "12345678", headline: "Diese Überschrift ist toll", author: "63355a5090ae11ff18c87aba", createdAt: "2022-11-07T16:30:18.692+00:00", displayPicture: "/images/Background-Irelia-only.svg", previewText: "Dem PSV gelingt der Auftakt in den Winter Split. Nach einer starken Performance blickt man nach vorne.", tag: ["Prime League", "League Of Legends"], type: "DSarticle" , content: [
                    {type: "text", content: "Das Team des PSV Solaris Dessau hat sein Debüt perfekt gestaltet. Mit einem 2:0 konnte man sichgegen NSM Mamamia durchsetzen und hat der Liga gezeigt, womit man zu rechnen hat."},
                    {type: "headline", content: "Der Carry aus dem Jungle"},
                    {type: "text", content: "Das erste Spiel begann zunächst ruhig bis in der fünften Minuten ein erfolgreicher Countergank von  Solaris-Jungler Xappy zu einem Doppelkill führte. Dieser nutzte seinen Goldlead aus um sowohl den ersten Drachen als auch den ersten Herold aufs Konto der Dessauer zu verbuchen. Auch auf der Botlane setzte man ein Zeichen, nachdem Support enzman mit Amumu eine Q-R-Combo auf die gegnerische Yuumi gelang und somit einen Pick sicherte. Mit dem daraus resultierenden Druck ließ sich Drache Nummer zwei erkämpfen und das Spiel war nun fest in der Hand des PSV Solaris Dessau. Ein Solokill von Showstealer auf der Toplane sowie ein weiterer Gank von Xappy sicherte den ersten Turm des Spiels. Von dem 6k-Goldrückstand konnte sich NSM nicht mehr erholen. Ein Teamfight um den Soulpoint, der mit 4:1 gewonnen werden konnte, brachte die Vorentscheidung. Ein cleanes Ace beim Kampf um die Drachenseele schlug den letzten Nagel in den Sarg. Solaris sicherte sich Baron Nashor und zerstörte 2 Inhibitoren. Ein weiteres Ace am Ahnendrachen brachteauch den Nexus zu fall. Der erste Sieg war perfekt."},
                    {type: "headline", content: "Ein teamfightlastiges Spiel"},
                    {type: "text", content: "Das zweite Spiel startete erneut ruhig bis in der fünften Minute wieder ein Gank von Xappy auf der Midlane Solaris nach vorne brachte. Zeitgleich gelang es der Botlane im 2 gegen 2 den gegnerischen ADC niederzuringen. Zwar musste man den ersten Drachen durch einen Catch auf Midlaner muxx abgeben, dies brachte das Team allerdings nicht aus dem Spiel. Im Gegenteil sogar: man findet einen Skirmish im Drachenpit und sichert sich 3 Kills, während man nur den Supporter abgeben muss. Nach einer starken Flash-Ult von Amumu vor dem zweiten Drachen gelingt es Solaris 3 Kills zu finden und sich damit einen Lead von 3k Gold aufzubauen. Nach einem weiteren Catch schafft man es alle äußeren Türme von NSM einzureißen. Mit der daraus resultierenden 6k Gold Führung schafft man es den dritten Drachen und Baron Nashor für sich zu beanspruchen. Mit diesem lassen sich alle inneren Türme aufbrechen. Ein Teamfight am gegnerischen Blue Buff bringt den ersten Inhibitor des Spiels zum Fallen, ein weiterer den Nash. Mit diesem bricht man auch den dritten Inhibitor auf und kann das zweite Spiel beenden."},
                ] }])
                // setCardData(current => [...current,response.data])
                // setCardData(current => [...current,{type: "DSleaderBoard", tag:["Prime League", "League Of Legends"], teams: [
                //     {name: "Solaris", tag: "SLR", wins: 10, loses: 0, history:["w", "w", "w"], symbol: "/images/Logo.svg"},
                //     {name: "Eko Tyrants", tag: "EKO",  wins: 10, loses: 0, history:["w", "l", "w"], symbol: "/images/Logo.svg"},
                //     {name: "Piltover", tag: "PTO",  wins: 6, loses: 4, history:["l", "w", "n"], symbol: "/images/Logo.svg"},
                //     {name: "Putin Clan", tag: "RMS",  wins: 5, loses: 5, history:["l", "w", "w"], symbol: "/images/Logo.svg"},
                //     {name: "Mamamia", tag: "MSN",  wins: 3, loses: 7, history:["w", "l", "l"], symbol: "/images/Logo.svg"},
                //     {name: "Human Apex Predator", tag: "APX",  wins: 1, loses: 9, history:["l", "n", "w"], symbol: "/images/Logo.svg"},
                //     {name: "Ka Digga", tag: "Kad",  wins: 1, loses: 9, history:["l", "w", "l"], symbol: "/images/Logo.svg"},
                //     {name: "UWU", tag: "UWU",  wins: 0, loses: 10, history:["l", "l", "n"], symbol: "/images/Logo.svg"},]}])
                // setCardData(current => [...current,{type: "DSmatch", day: 5, winner: 0, result: [2,0], teams: [
                //     {name: "Solaris", tag: "SLR", symbol: "/images/Logo.svg"},
                //     {name: "Eko Tyrants", tag: "EKO", symbol: "/images/Logo.svg"}]}])
            } catch(err) {
                console.log(err);
            }         
        }
        fetchApi()
    },[])

  return (
    <main id="newsroot" data-root-id="newsroot">
      {/* <Navbar currentPage={"News"}/> */}
      <AdminSideBar tools={["sliderEditor"]} setEditMode={false} />
      <div className="outer-wrapper">
        <section
          className="collapsible-section section-layout-touch"
          data-section-id="hot-slider-host"
        >
          {cardData ? (
            <HotSlider
              data={[
                cardData[0],
                cardData[1],
                cardData[2],
                cardData[3],
                cardData[4],
                cardData[5],
              ]}
            />
          ) : null}
        </section>
        <section className="section-layout-dont-touch description-container">
          <h1>Solaris News Feed</h1>
        </section>
        <section className="section-layout-touch stick-on-scroll">
          <NewsFilter
            getFilter={activeFilter}
            setFilter={setActiveFilter}
            getTagFilter={tagFilter}
            setTagFilter={setTagFilter}
            getActiveTagFilter={tagFilterArr}
          />
        </section>
        <section
          className="non-collapsable-section section-layout-dont-touch ds-container background-pattern"
          data-section-id="discovery-stream-wrapper"
        >
          <div className="ds-layout ds-layout-breakpoint">
            {cardData ? (
              cardData.map(
                (cardData, index) => (
                  <DiscoveryStream
                    key={cardData._id || index}
                    dataSet={cardData}
                  />
                )
                // filterArr.length > 0 && tagFilterArr.length > 0
                //     ? cardData.tag
                //         ? cardData.tag.map((tag) => tagFilterArr.includes(tag)).some(values => values === true) && filterArr.includes(cardData.type)
                //             ? <NewsItemProvider cardData={cardData} editMode={editMode}/>
                //             : null
                //         : null
                //     :
                // filterArr.length == 0 && tagFilterArr.length > 0
                //     ? cardData.tag
                //         ? cardData.tag.map((tag) => tagFilterArr.includes(tag)).some(values => values === true)
                //             ? <NewsItemProvider cardData={cardData} editMode={editMode}/>
                //             : null
                //         : null
                //     :
                // filterArr.length > 0 && tagFilterArr.length == 0
                //     ? filterArr.includes(cardData.type)
                //         ? <NewsItemProvider cardData={cardData} editMode={editMode}/>
                //         : null
                //     : <NewsItemProvider cardData={cardData} editMode={editMode}/>)
              )
            ) : (
              <DiscoveryStreamSkeleton />
            )}
          </div>
        </section>
        <section className="news__bot"></section>
        <Footer />
      </div>
    </main>
  );
}
