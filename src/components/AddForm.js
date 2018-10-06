import React, {Component} from 'react'

class AddTodo extends Component{

  state = {
    content : ""
  }

  handleInputChange = (e) => {
    this.setState({
      content : e.target.value
    })
  }

  addNewTodo = (e) => {
    e.preventDefault()
    if (this.state.content.length > 0){
      this.props.addNewTodo(this.state)
    }
    this.setState({ content : ""})
  }
  render(){
    return(
      <div className='container'>
        <form onSubmit={this.addNewTodo}>
          <label> Add New Todo</label>
          <input type='text' onChange={this.handleInputChange} name='todoName' />
        </form>
      </div>
    )
  }
}

export default AddTodo