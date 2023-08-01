import React, { Component } from 'react'
import './Assaihnment5.css'


export default class Assaignment5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dt: new Date(),
    };
  }
  componentDidMount() {
    setInterval(() => { this.setState({ dt: new Date() }) })
  }
  componentDidUpdate() {
    if (this.state.dt.toLocaleTimeString() === "4:53:10 pm") {
      alert("Take a Break...")

    }
  }
  render() {
    return (
      <div className='time'>
        <center>
        <h1 className='name'>{this.state.dt.toLocaleTimeString()}</h1>
        </center>
      </div>
    )
  }
}
