import React from "react";
import { useParams } from "react-router-dom";
import Post from "../Components/Post";

const PostPage = () => {
  const { name } = useParams();
  return (
    <div>
      <Post name={name} />
    </div>
  );
};

export default PostPage;
