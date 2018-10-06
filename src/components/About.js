import React from 'react'
import ExampleHOC from '../higher_order_component/ExampleHOC'

const About = () => {
  return (
    <div className='container'>
      <h3 className='center'> About </h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio doloremque culpa quos sint mollitia fugiat,  </p>
    </div>
  )
}

export default ExampleHOC(About)