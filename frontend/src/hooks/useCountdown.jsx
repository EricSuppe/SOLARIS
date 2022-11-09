import React, { useEffect, useState } from 'react';
import "./useCountdown.css"

const useCountdown = (targetDate) => {
  
  const COUNT_DOWN_DATE = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(COUNT_DOWN_DATE - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(COUNT_DOWN_DATE - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [COUNT_DOWN_DATE]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return (
    <ul className='useCountdown'>
      <li>
        <span >{days}</span>
        <span >{days === 1 ? "Tag" : "Tage"}</span>
      </li>
      <li>
        <span >{hours}</span>
        <span >{hours === 1 ? "Stunde" : "Stunden"}</span>
      </li>
      <li>
        <span >{minutes}</span>
        <span >{minutes === 1 ? "Minute" : "Minuten"}</span>
      </li>
      <li>
        <span >{seconds}</span>
        <span >{seconds === 1 ? "Sekunde" : "Sekunden"}</span>
      </li>
    </ul>
  );
};

export { useCountdown };