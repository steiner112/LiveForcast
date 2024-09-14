import React from 'react';
import Lost from "../assets/lost.png"

export default function Error() {
  return (
    <main style={{flexDirection : "column"}}>
      <img style={{width: "30vw",minWidth: "300px"}} src={Lost} alt="lst" />
      <h1>ERROR 404</h1>
      <p>Page not Found...</p>
    </main>
  )
}
