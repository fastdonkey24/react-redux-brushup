import React, {Component} from 'react'
import {connect} from 'react-redux';
import { PostActions}  from '../actions/postActions';


class PostDetail extends Component{
  // state = {
  //   post : null
  // }

  // async componentDidMount(){
  //   let id = this.props.match.params.post_id
    
  //   var endpointURL = 'http://jsonplaceholder.typicode.com/posts/' + id
  //   var requestOptions = {
  //     headers : {
  //       "Content-Type" : "application/json"
  //     }
  //   }

  //   var rawPost = await fetch(endpointURL, requestOptions)
  //   var post = await rawPost.json()

  //   this.setState({ 
  //     post : post
  //   })
  // }

  handleDelete = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/home');
}

  render(){

    let noPost = <p className='center'>Please Wait</p> 

    // let post = this.state.post ? ( 
    //   <div className='container'>
    //     <h3> {this.state.post.title} </h3>
    //     <p> {this.state.post.body} </p>
    //   </div>
    //   ) : noPost
        

    let post = this.props.post ? ( 
      <div className='container'>
        <h3> {this.props.post.title} </h3>
        <p> {this.props.post.body} </p>
        <button className='btn grey' onClick={this.handleDelete }> Delete </button>
      </div>
      ) : noPost
        
    return post
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.post_id)
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(PostActions.deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)