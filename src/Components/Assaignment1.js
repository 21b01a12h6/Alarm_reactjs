import React from 'react'
import choco from "../love.jpeg"


const Assaignment1 = () => {
  return (
    <div style={{paddingLeft:550,paddingRight:250,paddingTop:100}}>
      <div class="ui card" style={{width:350}}>
  <div class="image">
    <img src={choco} />
  </div>
  <div class="content">
    <a class="header">Ferroro Rocher</a>
    
    <div class="description">
      Not only Tasty but also healthy.I love this chocolate very much and is also my stress burster.
      It's very Interesting to know that there are many facts regarding this chocolate...
      <br></br>
      <br></br>
    </div>
  </div>
  <div>
    <a href="#" style={{padding:8}}>SHARE</a>
    <a href="#" style={{padding:25}}>LEARN MORE</a>
    <br></br>
    <br></br>
  </div>
  </div>
</div>
  )
}

export default Assaignment1
