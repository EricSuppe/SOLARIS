import React, { useEffect } from 'react'
import GuideLines from '../../../../components/common/guideLines/Guides'
import "./nextEvent.css"
import fadingGradient from '../../../../scripts/Gradient';

export default function NextEvent() {

    useEffect(() => {
        fadingGradient()
    },[]);

    return (
        <section className="Section HomepageNextEVent" data-section-id>
            <div className="Section__masked">
                <div className="Section__backgroundMask">
                    <div className="Section__background">
                        <GuideLines />
                    </div>
                </div>
                <div className="Section__container">
                    <div className="Section__layoutContainer Section__layoutContainer--cover">
                        <div className="Section__layout ColumnLayout NextEventGrid">
                            <div className="NextEvent__container">
                                <canvas id="gradient-canvas"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
