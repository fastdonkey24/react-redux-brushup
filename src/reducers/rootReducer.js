const initialState = {
  posts : [
    {
      id : 1,
      title : "Hey Post 1",
      body : "Post Body 1"
    },
    {
      id : 2,
      title : "Hey Post 2",
      body : "Post Body 2"
    },
    {
      id : 3,
      title : "Hey Post 3",
      body : "Post Body 3"
    }

  ]
}

const rootReducer = (state=initialState, action) => {
  if (action.type === 'DELETE_POST'){
    let newPosts = state.posts.filter( post => post.id !== action.post_id)
    return {
      ...state,
      posts : newPosts
    }
  }

  return state
  
}

export default rootReducer