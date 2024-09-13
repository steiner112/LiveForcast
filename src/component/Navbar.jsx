import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
   //..................... navbar-function..........................
   let a = 1;
   function run() {
    //    document.querySelector("#dropdown").style.animationName = "navbar";
    document.querySelector("#dropdown").classList.toggle("dropdown1");

       a += 1 ;
       document.querySelector("#line1").classList.toggle("line1");
       document.querySelector("#line2").classList.toggle("line2");
       document.querySelector("#line4").classList.toggle("line4");
       if(a>1){
           document.querySelector("#dropdown").style.display = "inline-block";
           a = 0 ;
       }else if(a<2){
       document.querySelector("#dropdown").style.display = "none"; 
    }
    }
   //..................... navbar-end..........................
  return (
    <div>
       <nav id="navbar">
        <div id="outline" onClick={run} aria-label="Toggle navigation">
            <div id="line1"></div>
            <div id="line2"></div>
            <div id="line4"></div>
        </div>

        <ul id="dropdown" onMouseLeave={run}>
            <Link to="/"><li>Live-watch</li></Link>
            <Link to="/Weather"><li>Live-Weather</li></Link>
            <Link to="/About"><li>About</li></Link>
        </ul>

    </nav>
    </div>
  )
}
