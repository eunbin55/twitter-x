"use client";
import Image from "next/image";
import React from "react";
import { PostActionBtns } from "./PostActionBtns";
import { Post } from "@/types/post";
import { timeAgo } from "@/lib/timeAgo";
import { UserProfile } from "../users/UserProfile";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="flex gap-3 border-b-1 border-gray-200 py-2">
      <div>
        <UserProfile src={post.author.profileImage} />
      </div>
      <div className="post-wrap flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <div className="author-info flex items-center">
            <span className="font-bold">{post.author.name}</span>
            <span className="text-gray-500 text-xs ml-1">
              @{post.author.username}
            </span>
          </div>
          <div className="text-gray-500 text-xs">{timeAgo(post.createdAt)}</div>
        </div>
        <div>{post.content}</div>
        {post.images.length > 0 && (
          <div className="img-content">
            {post.images.map((image, index) => (
              <Image
                key={index}
                className="rounded-2xl"
                alt="PostImage"
                src={image}
                width={500}
                height={300}
              />
            ))}
          </div>
        )}
        <PostActionBtns post={post} />
      </div>
    </div>
  );
};
