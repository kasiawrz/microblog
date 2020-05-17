import React from "react";
import { Link } from "react-router-dom";
// import Post from "../Components/Post";
import { postContent } from "../assets/posts";

const postsList = postContent.map((post) => (
  <li key={post.id}>
    <Link to={`post/${post.id}`}>{post.title}</Link>
  </li>
));

const PostsListingPage = () => <ul>{postsList}</ul>;

export default PostsListingPage;
