import React, { useEffect, useState } from 'react'

export default function QuickScroll() {
    
    const [quickScroll,setQuickScroll] = useState(1);

    useEffect(() => {
      updateQuickScroll()
    },[quickScroll])
  
    const updateQuickScroll = () => {
      window.addEventListener("scroll", () => {
        window.pageYOffset > 900 ? setQuickScroll(() => 0) : setQuickScroll(() => 1)
      })
    }
  
    return (
        <div className="QuickScrollContainer" onClick={() => {quickScroll === 0 ? window.scrollTo(0,0) : window.scrollTo(0, document.body.scrollHeight - window.innerHeight)}}>
            <box-icon name={`chevrons-${quickScroll === 0 ? "up" : "down"}`} type='solid' color="#ff5c00" size="lg"></box-icon>
        </div>
    )
}
