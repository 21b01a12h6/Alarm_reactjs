import React from 'react'

const Ass4cont = () => {
  return (
    
    <div style={{display:"inline-flex"}}>
      <div style={{color:"black",marginTop:"150px",width:'450px',height:'350px', paddingLeft: '110px'}}>
        <h2>Declarative</h2><br/>
        <div>
            <p>React makes it painless to create interactive UIs. Design simple views foreach state in your application, 
                and React will efficiently updateand render just the right components when your data changes.</p>
            <p>Declarative views make your code more predictable and easier to debug.</p>
        </div>
    </div>
    <div>
    <div style={{color:"black",marginTop:"150px",width:'450px',height:'350px', paddingLeft: '110px'}}>
        <h2>Component-Based</h2><br/>
        <div>
            <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
            <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
        </div>
    </div>
    </div>
    <div style={{color:"black",marginTop:"150px",width:'450px',height:'350px', paddingLeft: '110px'}}>
        <h2>Learn Once, Write Anywhere</h2><br/>
        <div>
            <p>We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
            <p>Learn Once, Write Anywhere</p>
        </div>
    </div>
    </div>
  )
  }
  
export default Ass4cont
