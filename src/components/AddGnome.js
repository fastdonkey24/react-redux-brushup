import React from 'react'

class AddGnome extends React.Component{
  state = {
    name : null,
    age : null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addGnome(this.state)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='Name'>Name</label>
        <input type='text' id='name' onChange={this.handleChange}/> <br/>
        <label htmlFor='Age'>Age</label>
        <input type='text' id='age' onChange={this.handleChange} />
        <button type='submit'> Submit </button>
      </form>
    )
  }
}

export default AddGnome