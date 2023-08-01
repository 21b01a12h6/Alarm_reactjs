import React from 'react'
import Logo from './logo192.png'
import Sec from './Sec'



const Nav = () => {
    return (<>
        <div style={{ backgroundColor: 'black' }}>
            <div class="ui secondary  menu" >
                <div style={{paddingLeft:'80px'}}>
                <img src={Logo} height='60px'width='60px'/>
                
                </div>
                
                <a class="active item"style={{ color: 'aqua',fontSize:'25px',paddingLeft:'0px' }}>
                    <b>React</b>
                </a>
                <a class="active item"style={{ color: 'white',paddingLeft:'80px' }}>
                   Docs
                </a>
                <a class="item"style={{ color: 'white' }}>
                    Tutorial
                </a>
                <a class="item"style={{ color: 'white' }}>
                   Blog
                </a>
                <a class="item"style={{ color: 'white' }}>
                   Community
                </a>
                
                <div class="item"style={{paddingLeft:'80px'}}>
                        <div class="ui icon input">
                        <i class="search link icon"style={{ color: 'white' }}></i>
                           <input style={{ backgroundColor: 'black' }} type="text" placeholder="Search..." />
                            
                        </div>
                        </div>
                        <a class="item"style={{ color: 'white',paddingLeft:'150px' }}>
                    v17.0.2 
                </a>
                <a class="item"style={{ color: 'white' }}>
                   Languages
                </a>
                    <a class="ui item"style={{ color: 'white' }}>
                        Github
                    </a>
                </div>
            </div>
            <Sec/>

   </> )
}

export default Nav