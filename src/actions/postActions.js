export const PostActions = {
  deletePost : (id) => {
    return {
      type : 'DELETE_POST',
      post_id : id
    }
  }
}