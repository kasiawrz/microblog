import React from "react";
import { postContent } from "../assets/posts";

const Post = ({ name }) => {
  const selectedPost = postContent.find((post) => post.id === name);

  return (
    <div>
      <div>
        <h3>{selectedPost.title}</h3>
        <div>{selectedPost.content}</div>
      </div>
    </div>
  );
};

export default Post;
