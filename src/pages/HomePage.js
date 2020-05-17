import React from "react";
import Post from "../Components/Post";
import { postContent } from "../assets/posts";

const HomePage = () => (
  <>
    <h1>Engineering Microblog 👩🏼‍💻</h1>
    {postContent.map((post) => (
      <li key={post.id}>
        <Post name={post.id} />
      </li>
    ))}
  </>
);

export default HomePage;
