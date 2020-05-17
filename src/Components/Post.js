import React from "react";
import { postContent } from "../assets/posts";

const postArticles = postContent.map((post) => (
  <div>
    <h3>{post.title}</h3>
    <p>{post.content}</p>
    <a href={post.link}> link </a>
  </div>
));

const Post = () => (
  <div>
    {/* {currentPost} */}
    {postArticles}
  </div>
);

export default Post;
