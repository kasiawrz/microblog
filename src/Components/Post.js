import React from "react";
import { postContent } from "../assets/posts";

const postArticles = postContent.map((post) => (
  <div>
    <p>{post}</p>
  </div>
));

const Post = () => <div>{postArticles}</div>;

export default Post;
