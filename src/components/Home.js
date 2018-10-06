import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component{

  // state = {
  //   posts : []
  // }

  // async componentDidMount(){
  //   var endpointURL = 'http://jsonplaceholder.typicode.com/posts'
  //   var requestOptions = {
  //     headers : {
  //       "Content-Type" : "application/json"
  //     }
  //   }

  //   var rawPosts = await fetch(endpointURL, requestOptions)
  //   var posts = await rawPosts.json()

  //   this.setState({ 
  //     posts : posts.slice(0, 20)
  //   })

  // }

  render(){

    // let {posts} = this.state
    let {posts} = this.props

    let emptyPosts = <p className='center'> Please Wait, like, for eternity</p>

    let postsList = posts.length ? (
      posts.map(post => {
        return (
          <Link to={"/posts/" + post.id} key={post.id}>
            <div className='post card' key={post.id}>
            <div className='card-content'>
              <span className='card-title'>
                {post.title}
              </span>
              <p className='grey-text'> {post.body} </p>
            </div>
          </div>
          </Link>
        )
      })
    ) : emptyPosts

    let htmlToRender = 
      <div className='container'>
        <h3 className='center'> Home </h3>
        {postsList}
      </div>
    
    return (htmlToRender)
  }
}

const mapStateToProps = (state) => {
  return {
    posts : state.posts
  }
}

export default connect(mapStateToProps)(Home)