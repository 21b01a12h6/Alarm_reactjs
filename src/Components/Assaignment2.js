import React from 'react'
import myself from '../mypic.jpg'
import pup from '../pup.jpg'


const Assaignment3 = () => {
  return (
    <div>
      <div class="ui cards" style={{paddingLeft:450,paddingTop:50}}>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src={myself} />
      <div class="header">
        TATA Nithya Sri
      </div>
      <div class="meta">
        Always be happy
      </div>
      <div class="description">
        I am studying II b-tech in Shri vishnu Engineering College for Women.
        I love Eating Chocolates.I am a foodie...My aim is to become an Engineer and also a Lecturer..
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic black button">Accept</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src={pup} />
      <div class="header">
        VENNA Kavya Harshitha
      </div>
      <div class="meta">
        Stupid member
      </div>
      <div class="description">
        She is very intellectual and also bright student. She loves self-learning and also interested to Eat a lot. We are <b>best friends</b>
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic black button">Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Assaignment3
