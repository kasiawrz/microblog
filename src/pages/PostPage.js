import React from "react";
import { useParams } from "react-router-dom";
// import Post from "../Components/Post";
import { postContent } from "../assets/posts";

const PostPage = () => {
  const { name } = useParams();
  const selectedPost = postContent.find((post) => post.name === name);
  return (
    <div>
      <p>{selectedPost.title}</p>
      <div>{selectedPost.content}</div>
    </div>
  );
};

export default PostPage;
