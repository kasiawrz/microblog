import React from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { name } = useParams();
  return <div> post page: {name} </div>;
};

export default PostPage;
