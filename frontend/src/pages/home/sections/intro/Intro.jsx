import React, { lazy, Suspense, useEffect, useState } from 'react'
import "./intro.css"
import GuideLines from '../../../../components/common/guideLines/Guides'
const HotSlider = lazy(() => import("../../../../components/slider/Hot-slider"));
import Spinner from '../../../transition/Spinner';

export default function Intro() {

  const [cardData,setCardData] = useState(null);

  useEffect(() => {
    try {
      
      setCardData([{_id: "123456789", headline: "Diese Überschrift ist toll", author: "63355a5090ae11ff18c87aba", createdAt: "2022-11-07T16:30:18.692+00:00", displayPicture: "/images/senna.jpg", previewText: "Dem PSV gelingt der Auftakt in den Winter Split. Nach einer starken Performance blickt man nach vorne.", tag: ["Prime League", "League Of Legends"], type: "DSarticle" , content: [
        {type: "text", content: "Das Team des PSV Solaris Dessau hat sein Debüt perfekt gestaltet. Mit einem 2:0 konnte man sichgegen NSM Mamamia durchsetzen und hat der Liga gezeigt, womit man zu rechnen hat."},
        {type: "headline", content: "Der Carry aus dem Jungle"},
        {type: "text", content: "Das erste Spiel begann zunächst ruhig bis in der fünften Minuten ein erfolgreicher Countergank von  Solaris-Jungler Xappy zu einem Doppelkill führte. Dieser nutzte seinen Goldlead aus um sowohl den ersten Drachen als auch den ersten Herold aufs Konto der Dessauer zu verbuchen. Auch auf der Botlane setzte man ein Zeichen, nachdem Support enzman mit Amumu eine Q-R-Combo auf die gegnerische Yuumi gelang und somit einen Pick sicherte. Mit dem daraus resultierenden Druck ließ sich Drache Nummer zwei erkämpfen und das Spiel war nun fest in der Hand des PSV Solaris Dessau. Ein Solokill von Showstealer auf der Toplane sowie ein weiterer Gank von Xappy sicherte den ersten Turm des Spiels. Von dem 6k-Goldrückstand konnte sich NSM nicht mehr erholen. Ein Teamfight um den Soulpoint, der mit 4:1 gewonnen werden konnte, brachte die Vorentscheidung. Ein cleanes Ace beim Kampf um die Drachenseele schlug den letzten Nagel in den Sarg. Solaris sicherte sich Baron Nashor und zerstörte 2 Inhibitoren. Ein weiteres Ace am Ahnendrachen brachteauch den Nexus zu fall. Der erste Sieg war perfekt."},
        {type: "headline", content: "Ein teamfightlastiges Spiel"},
        {type: "text", content: "Das zweite Spiel startete erneut ruhig bis in der fünften Minute wieder ein Gank von Xappy auf der Midlane Solaris nach vorne brachte. Zeitgleich gelang es der Botlane im 2 gegen 2 den gegnerischen ADC niederzuringen. Zwar musste man den ersten Drachen durch einen Catch auf Midlaner muxx abgeben, dies brachte das Team allerdings nicht aus dem Spiel. Im Gegenteil sogar: man findet einen Skirmish im Drachenpit und sichert sich 3 Kills, während man nur den Supporter abgeben muss. Nach einer starken Flash-Ult von Amumu vor dem zweiten Drachen gelingt es Solaris 3 Kills zu finden und sich damit einen Lead von 3k Gold aufzubauen. Nach einem weiteren Catch schafft man es alle äußeren Türme von NSM einzureißen. Mit der daraus resultierenden 6k Gold Führung schafft man es den dritten Drachen und Baron Nashor für sich zu beanspruchen. Mit diesem lassen sich alle inneren Türme aufbrechen. Ein Teamfight am gegnerischen Blue Buff bringt den ersten Inhibitor des Spiels zum Fallen, ein weiterer den Nash. Mit diesem bricht man auch den dritten Inhibitor auf und kann das zweite Spiel beenden."},
        ]}])
      setCardData(current => [...current,{_id: "12345678", headline: "Diese Überschrift ist toll", author: "63355a5090ae11ff18c87aba", createdAt: "2022-11-07T16:30:18.692+00:00", displayPicture: "/images/article_hover.png", previewText: "Dem PSV gelingt der Auftakt in den Winter Split. Nach einer starken Performance blickt man nach vorne.", tag: ["Prime League", "League Of Legends"], type: "DSarticle" , content: [
          {type: "text", content: "Das Team des PSV Solaris Dessau hat sein Debüt perfekt gestaltet. Mit einem 2:0 konnte man sichgegen NSM Mamamia durchsetzen und hat der Liga gezeigt, womit man zu rechnen hat."},
          {type: "headline", content: "Der Carry aus dem Jungle"},
          {type: "text", content: "Das erste Spiel begann zunächst ruhig bis in der fünften Minuten ein erfolgreicher Countergank von  Solaris-Jungler Xappy zu einem Doppelkill führte. Dieser nutzte seinen Goldlead aus um sowohl den ersten Drachen als auch den ersten Herold aufs Konto der Dessauer zu verbuchen. Auch auf der Botlane setzte man ein Zeichen, nachdem Support enzman mit Amumu eine Q-R-Combo auf die gegnerische Yuumi gelang und somit einen Pick sicherte. Mit dem daraus resultierenden Druck ließ sich Drache Nummer zwei erkämpfen und das Spiel war nun fest in der Hand des PSV Solaris Dessau. Ein Solokill von Showstealer auf der Toplane sowie ein weiterer Gank von Xappy sicherte den ersten Turm des Spiels. Von dem 6k-Goldrückstand konnte sich NSM nicht mehr erholen. Ein Teamfight um den Soulpoint, der mit 4:1 gewonnen werden konnte, brachte die Vorentscheidung. Ein cleanes Ace beim Kampf um die Drachenseele schlug den letzten Nagel in den Sarg. Solaris sicherte sich Baron Nashor und zerstörte 2 Inhibitoren. Ein weiteres Ace am Ahnendrachen brachteauch den Nexus zu fall. Der erste Sieg war perfekt."},
          {type: "headline", content: "Ein teamfightlastiges Spiel"},
          {type: "text", content: "Das zweite Spiel startete erneut ruhig bis in der fünften Minute wieder ein Gank von Xappy auf der Midlane Solaris nach vorne brachte. Zeitgleich gelang es der Botlane im 2 gegen 2 den gegnerischen ADC niederzuringen. Zwar musste man den ersten Drachen durch einen Catch auf Midlaner muxx abgeben, dies brachte das Team allerdings nicht aus dem Spiel. Im Gegenteil sogar: man findet einen Skirmish im Drachenpit und sichert sich 3 Kills, während man nur den Supporter abgeben muss. Nach einer starken Flash-Ult von Amumu vor dem zweiten Drachen gelingt es Solaris 3 Kills zu finden und sich damit einen Lead von 3k Gold aufzubauen. Nach einem weiteren Catch schafft man es alle äußeren Türme von NSM einzureißen. Mit der daraus resultierenden 6k Gold Führung schafft man es den dritten Drachen und Baron Nashor für sich zu beanspruchen. Mit diesem lassen sich alle inneren Türme aufbrechen. Ein Teamfight am gegnerischen Blue Buff bringt den ersten Inhibitor des Spiels zum Fallen, ein weiterer den Nash. Mit diesem bricht man auch den dritten Inhibitor auf und kann das zweite Spiel beenden."},
      ]}])
      setCardData(current => [...current,{_id: "12345678", headline: "Diese Überschrift ist toll", author: "63355a5090ae11ff18c87aba", createdAt: "2022-11-07T16:30:18.692+00:00", displayPicture: "/images/senna.jpg", previewText: "Dem PSV gelingt der Auftakt in den Winter Split. Nach einer starken Performance blickt man nach vorne.", tag: ["Prime League", "League Of Legends"], type: "DSarticle" , content: [
        {type: "text", content: "Das Team des PSV Solaris Dessau hat sein Debüt perfekt gestaltet. Mit einem 2:0 konnte man sichgegen NSM Mamamia durchsetzen und hat der Liga gezeigt, womit man zu rechnen hat."},
          {type: "headline", content: "Der Carry aus dem Jungle"},
          {type: "text", content: "Das erste Spiel begann zunächst ruhig bis in der fünften Minuten ein erfolgreicher Countergank von  Solaris-Jungler Xappy zu einem Doppelkill führte. Dieser nutzte seinen Goldlead aus um sowohl den ersten Drachen als auch den ersten Herold aufs Konto der Dessauer zu verbuchen. Auch auf der Botlane setzte man ein Zeichen, nachdem Support enzman mit Amumu eine Q-R-Combo auf die gegnerische Yuumi gelang und somit einen Pick sicherte. Mit dem daraus resultierenden Druck ließ sich Drache Nummer zwei erkämpfen und das Spiel war nun fest in der Hand des PSV Solaris Dessau. Ein Solokill von Showstealer auf der Toplane sowie ein weiterer Gank von Xappy sicherte den ersten Turm des Spiels. Von dem 6k-Goldrückstand konnte sich NSM nicht mehr erholen. Ein Teamfight um den Soulpoint, der mit 4:1 gewonnen werden konnte, brachte die Vorentscheidung. Ein cleanes Ace beim Kampf um die Drachenseele schlug den letzten Nagel in den Sarg. Solaris sicherte sich Baron Nashor und zerstörte 2 Inhibitoren. Ein weiteres Ace am Ahnendrachen brachteauch den Nexus zu fall. Der erste Sieg war perfekt."},
          {type: "headline", content: "Ein teamfightlastiges Spiel"},
          {type: "text", content: "Das zweite Spiel startete erneut ruhig bis in der fünften Minute wieder ein Gank von Xappy auf der Midlane Solaris nach vorne brachte. Zeitgleich gelang es der Botlane im 2 gegen 2 den gegnerischen ADC niederzuringen. Zwar musste man den ersten Drachen durch einen Catch auf Midlaner muxx abgeben, dies brachte das Team allerdings nicht aus dem Spiel. Im Gegenteil sogar: man findet einen Skirmish im Drachenpit und sichert sich 3 Kills, während man nur den Supporter abgeben muss. Nach einer starken Flash-Ult von Amumu vor dem zweiten Drachen gelingt es Solaris 3 Kills zu finden und sich damit einen Lead von 3k Gold aufzubauen. Nach einem weiteren Catch schafft man es alle äußeren Türme von NSM einzureißen. Mit der daraus resultierenden 6k Gold Führung schafft man es den dritten Drachen und Baron Nashor für sich zu beanspruchen. Mit diesem lassen sich alle inneren Türme aufbrechen. Ein Teamfight am gegnerischen Blue Buff bringt den ersten Inhibitor des Spiels zum Fallen, ein weiterer den Nash. Mit diesem bricht man auch den dritten Inhibitor auf und kann das zweite Spiel beenden."},
      ]}])
      setCardData(current => [...current,{_id: "12345678", headline: "Diese Überschrift ist toll", author: "63355a5090ae11ff18c87aba", createdAt: "2022-11-07T16:30:18.692+00:00", displayPicture: "/images/article_hover.png", previewText: "Dem PSV gelingt der Auftakt in den Winter Split. Nach einer starken Performance blickt man nach vorne.", tag: ["Prime League", "League Of Legends"], type: "DSarticle" , content: [
        {type: "text", content: "Das Team des PSV Solaris Dessau hat sein Debüt perfekt gestaltet. Mit einem 2:0 konnte man sichgegen NSM Mamamia durchsetzen und hat der Liga gezeigt, womit man zu rechnen hat."},
        {type: "headline", content: "Der Carry aus dem Jungle"},
          {type: "text", content: "Das erste Spiel begann zunächst ruhig bis in der fünften Minuten ein erfolgreicher Countergank von  Solaris-Jungler Xappy zu einem Doppelkill führte. Dieser nutzte seinen Goldlead aus um sowohl den ersten Drachen als auch den ersten Herold aufs Konto der Dessauer zu verbuchen. Auch auf der Botlane setzte man ein Zeichen, nachdem Support enzman mit Amumu eine Q-R-Combo auf die gegnerische Yuumi gelang und somit einen Pick sicherte. Mit dem daraus resultierenden Druck ließ sich Drache Nummer zwei erkämpfen und das Spiel war nun fest in der Hand des PSV Solaris Dessau. Ein Solokill von Showstealer auf der Toplane sowie ein weiterer Gank von Xappy sicherte den ersten Turm des Spiels. Von dem 6k-Goldrückstand konnte sich NSM nicht mehr erholen. Ein Teamfight um den Soulpoint, der mit 4:1 gewonnen werden konnte, brachte die Vorentscheidung. Ein cleanes Ace beim Kampf um die Drachenseele schlug den letzten Nagel in den Sarg. Solaris sicherte sich Baron Nashor und zerstörte 2 Inhibitoren. Ein weiteres Ace am Ahnendrachen brachteauch den Nexus zu fall. Der erste Sieg war perfekt."},
          {type: "headline", content: "Ein teamfightlastiges Spiel"},
          {type: "text", content: "Das zweite Spiel startete erneut ruhig bis in der fünften Minute wieder ein Gank von Xappy auf der Midlane Solaris nach vorne brachte. Zeitgleich gelang es der Botlane im 2 gegen 2 den gegnerischen ADC niederzuringen. Zwar musste man den ersten Drachen durch einen Catch auf Midlaner muxx abgeben, dies brachte das Team allerdings nicht aus dem Spiel. Im Gegenteil sogar: man findet einen Skirmish im Drachenpit und sichert sich 3 Kills, während man nur den Supporter abgeben muss. Nach einer starken Flash-Ult von Amumu vor dem zweiten Drachen gelingt es Solaris 3 Kills zu finden und sich damit einen Lead von 3k Gold aufzubauen. Nach einem weiteren Catch schafft man es alle äußeren Türme von NSM einzureißen. Mit der daraus resultierenden 6k Gold Führung schafft man es den dritten Drachen und Baron Nashor für sich zu beanspruchen. Mit diesem lassen sich alle inneren Türme aufbrechen. Ein Teamfight am gegnerischen Blue Buff bringt den ersten Inhibitor des Spiels zum Fallen, ein weiterer den Nash. Mit diesem bricht man auch den dritten Inhibitor auf und kann das zweite Spiel beenden."},
        ]}])
    } catch (error) {
      console.log(error)
    }
  },[]);
  
  return (
    <section className="Section HomepageIntro" data-section-id>
      <div className="Section__masked">
        <div className="Section__backgroundMask">
          <div className="Section__background">
            <GuideLines />
          </div>
        </div>
        <div className="Section__container">
          <div className="Section__layoutContainer Section__layoutContainer--full">
            <div className="Section__layout ColumnLayout IntroGrid">
              <div className="Slider__container">
                {cardData ? (
                  <Suspense fallback={<Spinner type={"linear"} />}>
                    <HotSlider
                      data={[
                        cardData[0],
                        cardData[1],
                        cardData[2],
                        cardData[3],
                      ]}
                    />
                  </Suspense>
                ) : null}
              </div>
            </div>
          </div>
          <div className="HafltoneGrid IntroHalftone"></div>
        </div>
      </div>
    </section>
  );
}