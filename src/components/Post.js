import { useState } from "react";
   
const Post = ({post}) => {

    const [likes, SetLikes] = useState(0)

  return(
    <div>
      <img src={post.image} height="250" width="250" />
      <p>Post by {post.username} • {likes} likes</p>
      <button onClick={() => {SetLikes(likes+1)}}>♥︎</button>
      <p>{post.content}</p>
    </div>
  )
}

export default Post;