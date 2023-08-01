import React from 'react'
import letter from './letterM.jpg'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'

const Newpro = () => {
    return (<>
        <div>
            <div style={{ backgroundColor: 'black' }}>
                <div class="ui secondary  menu" >
                    <div style={{ paddingLeft: '80px' }}>
                        <img src={letter} height='60px' width='60px' />

                    </div>
                    <a class="active item" style={{ color: 'aqua', fontSize: '25px', paddingLeft: '0px' }}>
                        <b>mosaic</b>
                    </a>
                    <a class="active item" style={{ color: 'white', paddingLeft: '80px' }}>
                        Platform
                    </a>
                    <a class="item" style={{ color: 'white' }}>
                        Solutions
                    </a>
                    <a class="item" style={{ color: 'white' }}>
                        Integration
                    </a>
                    <a class="item" style={{ color: 'white' }}>
                        Customers
                    </a>
                    <a class="item" style={{ color: 'white' }}>
                        Plans
                    </a>
                    <a class="item" style={{ color: 'white' }}>
                        Resources
                    </a>
                    <a class="item" style={{ color: 'white' }}>
                        Company
                    </a>
                    <a href="#" style={{ color: "aqua", fontSize: "15px", paddingTop: "22px", paddingLeft: "200px" }}> Take the Tutorial </a>
                    <button style={{ color: "black", borderRadius: "2px", backgroundColor: "aqua", width: "100px", height: "50px", marginLeft: "50px" }}> Get Started</button>

                    <div style={{ backgroundColor: "black" }}>

                    </div>

                </div>
            </div>
        </div>
        <div style={{ backgroundColor: "black", height: "600px" }}>
            <center>
                <p style={{ color: "white", fontSize: "50px" }}>Equip your business with<br></br> world class Software </p>
                <p style={{ color: "white" }}>Bring your Entire financial Blue print into focus with a Strategic Finance<br></br>Platform that connects and drives the business in real-time.</p><br></br>
                <img src={img1} width="200px" height="200px" />
                <img src={img2} width="200px" height="200px" style={{ paddingLeft: "25px" }} />
                <img src={img3} width="200px" height="200px" style={{ paddingLeft: "25px" }} />
                <img src={img4} width="200px" height="200px" style={{ paddingLeft: "25px" }} />
            </center><br></br><br></br>




            <div style={{ marginLeft: "150px", paddingTop: "5px", marginTop: "10px" }}>
                <div style={{ display: 'inline-flex', paddingLeft: "55px", border: "1px solid black", backgroundColor: "white", paddingTop: "15px" }}>
                    <img style={{ paddingLeft: "5px" }} src={img5} />

                    <div style={{ width: "300px", paddingLeft: "40px" }}><h1>Analytics</h1>
                        <p>Drive Performance and cross-<br></br>functional collaboration with easy-<br></br>to-use Analytics tools.</p>
                        <i class="check icon" style={{ color: "green" }}></i> Get answers in read-time<br></br><br></br>
                        <i class="check icon" style={{ color: "green" }}></i> Report on what matters<br></br><br></br>
                        <button style={{ backgroundColor: "dodgerblue", borderRadius: "2px", padding: "10px", width: "250px", border: "dodgerblue" }}>Request a demo</button>

                    </div>
                    <div style={{ width: "300px", paddingLeft: "40px" }}>
                        <h1>Planning</h1>
                        <p>Model and adapt to rapidly<br></br>changing conditions with flexible<br></br>financial planning.</p>
                        <i class="check icon" style={{ color: "green" }}></i> Collaborate seemlessly<br></br><br></br>
                        <i class="check icon" style={{ color: "green" }}></i> Update plans on the fly<br></br><br></br>
                        <button style={{ backgroundColor: "dodgerblue", borderRadius: "2px", padding: "10px", width: "250px", border: "dodgerblue" }}>Request a demo</button>
                    </div>
                    <div style={{ width: "300px", paddingLeft: "40px" }}>
                        <h1>Analytics & Planning</h1>
                        <p>Continue our Analytics and<br></br>Planning engines for powerful<br></br>strategic finance solutions.</p>
                        <i class="check icon" style={{ color: "green" }}></i> See every corner of the business<br></br><br></br>
                        <i class="check icon" style={{ color: "green" }}></i>Make better investment decisions<br></br><br></br>
                        <button style={{ backgroundColor: "dodgerblue", borderRadius: "2px", padding: "10px", width: "250px", border: "dodgerblue" }}>Request a demo</button><br></br><br></br>
                    </div>

                </div>
            </div><br></br><br></br><br></br>
            <div>
            </div>
            <table class="ui celled structured table">
                <thead>
                    <tr>
                        <th colSpan={4}>Financial Analytics <i style={{ paddingLeft: "1350px" }} class="minus circle icon"></i></th>

                    </tr>
                    <tr>
                        <td colSpan={0} ></td>
                        <td ><center>Analytics</center></td>
                        <td><center>Planning</center></td>
                        <td><center>Analytics & Planning</center></td>
                    </tr>
                    <tr>
                        <td>Dynamic analysis and dashboarding with canvas</td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td></td>
                        <td><center><i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                    </tr>
                    <tr>
                        <td>125+ out of the box saas Matrices</td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td></td>
                        <td><center><i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                    </tr>
                    <tr>
                        <td>Transaction-level drilldown</td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td></td>
                        <td><center><i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                    </tr>
                    <tr>
                        <td>On-demand financial statements</td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td><center><i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                    </tr>
                    <tr>
                        <td>Cusion financial report builder</td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td></td>
                        <td><center><i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                    </tr>
                    <tr>
                        <td>Automated Forecast vs.actual</td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td></td>
                        <td><center><i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                    </tr>
                    <tr>
                        <td> Automated Consolidations,Currency Transactions and Eliminations</td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td><center><i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                    </tr>
                    <tr>
                        <td>pre-loaded metric templates</td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td></td>
                        <td><center><i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                    </tr>
                    <tr>
                        <td>Geal-setting hub</td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td><center><i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                    </tr>
                    <tr>
                        <td>Performance Alerts</td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td></td>
                        <td><center><i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                    </tr>
                    <tr>
                        <td>Unlimited reporting packages</td>
                        <td><center>  <i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                        <td></td>
                        <td><center><i class="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center></td>
                    </tr>
                </thead>
            </table>
        </div>
    </>)
}

export default Newpro
