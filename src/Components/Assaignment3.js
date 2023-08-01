import React from 'react'
import mee from '../me.jpg'
import kaav from '../kav.jpg'
import puppy from '../pup.jpg'
import choco from '../love.jpeg'

const Assaignment2 = () => {
  return (
    <div style={{paddingLeft:520,paddingTop:100}}>
      <table class="ui very basic collapsing celled table">
  <thead>
    <tr><th>Employee</th>
    <th>Correct Guesses</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src={mee} class="ui mini rounded image" />
          <div class="content">
            Nithya
            <div class="sub header">Human Resources
          </div>
        </div>
      </h4></td>
      <td>
        22
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src={kaav} class="ui mini rounded image" />
          <div class="content">
            Kavya
            <div class="sub header">Fabric Design
          </div>
        </div>
      </h4></td>
      <td>
        15
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src={puppy} class="ui mini rounded image" />
          <div class="content">
            Sushma
            <div class="sub header">Entertainment
          </div>
        </div>
      </h4></td>
      <td>
        12
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src={choco} class="ui mini rounded image" />
          <div class="content">
            Nikitha
            <div class="sub header">Executive
          </div>
        </div>
      </h4></td>
      <td>
        11
      </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Assaignment2



