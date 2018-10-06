import React from 'react'

const ExampleHOC = (WrappedComponent) => {
  const colors = ['red', 'blue', 'pink', 'green', 'orange', 'yellow']
  const randomColor = colors[Math.floor(Math.random()*5)]

  const theClassName = randomColor + '-text'
  return (props) => {
    return (
      <div className={theClassName}>
        <WrappedComponent {...props}/>
      </div>
    )
  }
  
}


export default ExampleHOC