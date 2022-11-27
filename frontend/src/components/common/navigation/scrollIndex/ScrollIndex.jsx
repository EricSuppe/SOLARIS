import React from 'react'
import useReadingProgress from '../../../../hooks/useReadingProgress';



export default function ScrollIndex() {

    const progress = useReadingProgress()

    return (
      <span
        className="ScrollProgressIndex"
        aria-hidden="true"
        aria-label="scroll-progress"
        style={{ width: `${progress}%`, height: "5px", position:"fixed", inset:"0", zIndex: "10000", backgroundColor: "#ff5c00"}}
      ></span>
    );
}
