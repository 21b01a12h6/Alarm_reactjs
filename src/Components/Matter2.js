import React from 'react'
import "./Matter2.css"


const Matter2 = () => {
    const data = [
        {
            id : 1,
            heading : "Declarative",
            body1 : "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
            body2 : "Declarative views make your code more predictable and easier to debug.",
        },
        {
            id : 2,
            heading : "Component-Based",
            body1 : "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
            body2 : "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
        },
        {
            id : 3,
            heading : "Learn Once, Write Anywhere",
            body1 : "We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.",
            body2 : "React can also render on the server using Node and power mobile apps using React Native.",
        },
    ]
  return (
    <div>
      {data.map((item) => {
        return(
            <div className='head' key = {item.id}>
            <h1>{item.heading}</h1><br/>
          <div className='para'>
            <p>{item.body1}</p>
            <p>{item.body2}</p>
          </div>
          </div>) 
      })}
    </div>
  )
}

export default Matter2
