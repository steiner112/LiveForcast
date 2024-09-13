import React, { useState, useEffect} from 'react';

export default function Watch() {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
    year: new Date().getUTCFullYear(),
  });

  useEffect(() => {
    
setTimeout(() => {
  let style = document.querySelector("#show");
  style.style.animationName = "start";
  style.style.visibility = "visible"
}, 100);



    const interval = setInterval(() => {
      const currentTime = new Date();
      setTime({
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
        year: currentTime.getUTCFullYear(),
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <main id='show'>
     <div id='stylee' className="blob">
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="#8A3FFC" d="" transform="translate(100 100)">
      <animate attributeName="d" dur="6000ms" repeatCount="indefinite" values="M27.4,-38.3C36.5,-25,45.6,-17.3,48.1,-7.8C50.6,1.8,46.6,13.2,42.4,28.5C38.3,43.8,34.1,63,22,72.7C9.9,82.5,-10.1,82.7,-26.4,75.5C-42.8,68.3,-55.3,53.8,-58.1,38.6C-60.9,23.4,-54,7.5,-50.6,-8.5C-47.3,-24.6,-47.7,-40.9,-39.8,-54.4C-32,-68,-16,-78.8,-3.4,-74.7C9.1,-70.6,18.3,-51.7,27.4,-38.3Z;
                                                                             M46,-54.6C54.4,-47.8,52.2,-28.3,54.3,-10.5C56.4,7.4,62.7,23.6,60,40.6C57.3,57.6,45.6,75.4,31.4,76C17.3,76.7,0.7,60.3,-15.2,50.6C-31.1,41,-46.3,38.3,-56,28.8C-65.7,19.3,-70,3.1,-66.8,-11.2C-63.5,-25.5,-52.9,-37.9,-40.5,-44C-28.2,-50.1,-14.1,-49.9,2.4,-52.7C18.8,-55.5,37.7,-61.4,46,-54.6Z;

M55.6,-62.7C68.6,-55.3,73.5,-34.5,75.1,-14.8C76.6,4.9,75,23.6,66.7,39.1C58.5,54.6,43.6,66.8,28.2,68.4C12.8,70.1,-3.1,61.2,-18.6,54.2C-34.1,47.2,-49.2,42.2,-57.9,31.3C-66.6,20.5,-68.9,4,-65,-10.2C-61,-24.4,-50.6,-36.2,-38.8,-43.9C-26.9,-51.5,-13.4,-55,3.9,-59.6C21.3,-64.3,42.5,-70.2,55.6,-62.7Z;

M38.7,-43.8C50.6,-36.1,61,-24.3,60.8,-12.6C60.6,-0.9,49.7,10.8,43,27.1C36.3,43.5,33.7,64.5,22.8,73C11.8,81.5,-7.5,77.5,-18.5,66.7C-29.6,55.8,-32.5,38.1,-37,24.3C-41.6,10.4,-47.9,0.4,-47,-8.9C-46.1,-18.2,-37.9,-26.8,-28.8,-35C-19.8,-43.2,-9.9,-51,1.7,-53.1C13.4,-55.2,26.8,-51.5,38.7,-43.8Z;

M27.4,-38.3C36.5,-25,45.6,-17.3,48.1,-7.8C50.6,1.8,46.6,13.2,42.4,28.5C38.3,43.8,34.1,63,22,72.7C9.9,82.5,-10.1,82.7,-26.4,75.5C-42.8,68.3,-55.3,53.8,-58.1,38.6C-60.9,23.4,-54,7.5,-50.6,-8.5C-47.3,-24.6,-47.7,-40.9,-39.8,-54.4C-32,-68,-16,-78.8,-3.4,-74.7C9.1,-70.6,18.3,-51.7,27.4,-38.3Z
">

      </animate>
<animate attributeName="fill" dur="20s" repeatCount="indefinite" values="
      #8A3FFC;
      #3AC1EF;
      #F7B32B;
      #F22A7D;
      #8A3FFC;
    "></animate>
    </path>
  </svg>
</div>
      {/* ................... animation-end ......... */}
      <div id="box">
        <div>
          <span id="hours">{time.hours}</span>
          <span>:</span>
          <span id="min">{time.minutes}</span>
          <span>:</span>
          <span id="sec">{time.seconds}</span>
        </div>
      </div>
    </main>
  );
}
