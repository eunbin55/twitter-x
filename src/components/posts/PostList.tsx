import React from "react";
import { PostCard } from "./PostCard";
import postsData from "../../../data/posts.json";

export const PostList = () => {
  const posts = postsData;
  return (
    <div className="">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      ;
    </div>
  );
};
