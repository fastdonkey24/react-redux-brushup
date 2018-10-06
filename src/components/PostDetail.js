import React, {Component} from 'react'

class PostDetail extends Component{
  state = {
    post : null
  }

  async componentDidMount(){
    let id = this.props.match.params.post_id
    
    var endpointURL = 'http://jsonplaceholder.typicode.com/posts/' + id
    var requestOptions = {
      headers : {
        "Content-Type" : "application/json"
      }
    }

    var rawPost = await fetch(endpointURL, requestOptions)
    var post = await rawPost.json()

    this.setState({ 
      post : post
    })
  }

  render(){

    let noPost = <p className='center'>Please Wait</p> 

    let post = this.state.post ? ( 
      <div className='container'>
        <h3> {this.state.post.title} </h3>
        <p> {this.state.post.body} </p>
      </div>
      ) : noPost
    


     
    return post
  }
}

export default PostDetail