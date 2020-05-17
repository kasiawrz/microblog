import React from "react";
import { postContent } from "../assets/posts";

const postArtiles = postContent.map((post) => <p>{post}</p>);

const Post = () => <p>{postArtiles}</p>;

export default Post;
