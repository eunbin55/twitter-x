"use client";
import { useAppDispatch } from "@/redux/hooks";
import { toggleLike, toggleRetweet } from "@/redux/slices/postSlice";
import { Post } from "@/types/post";
import { Bookmark, Heart, MessageCircle, Repeat2 } from "lucide-react";
import React, { useState } from "react";

export const PostActionBtns = ({ post }: { post: Post }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const dispatch = useAppDispatch();

  const actions = [
    {
      name: "comments",
      title: "댓글",
      className: "hover:text-blue-700 hover:bg-blue-50",
      icon: <MessageCircle className="h-4 w-4" />,
      count: post.comments,
      onClickFn: () => {},
    },
    {
      name: "retweets",
      title: post.isRetweeted ? "재게시 취소" : "재게시",
      className: post.isRetweeted
        ? "text-green-700 bg-green-50"
        : "hover:text-green-700 hover:bg-green-50",
      textBoldStyle: post.isRetweeted
        ? {
            color: "#008236",
            fontWeight: 600,
          }
        : {},
      icon: <Repeat2 className="h-4 w-4" />,
      count: post.retweets,
      onClickFn: () => dispatch(toggleRetweet(post.id)),
    },
    {
      name: "likes",
      title: post.isLiked ? "좋아요 취소" : "좋아요",
      className: post.isLiked
        ? "text-red-500 bg-red-50"
        : "hover:text-red-500 hover:bg-red-50",
      textBoldStyle: post.isLiked
        ? {
            color: "#fb2c36",
            fontWeight: 600,
          }
        : {},
      icon: (
        <Heart
          className={`h-4 w-4 ${post.isLiked ? "fill-red-500" : "fill-none"}`}
        />
      ),
      count: post.likes,
      onClickFn: () => dispatch(toggleLike(post.id)),
    },
    {
      name: "bookmark",
      title: isBookmarked ? "북마크 취소" : "북마크",
      className: isBookmarked
        ? "text-yellow-500 bg-yellow-50"
        : "hover:text-yellow-500 hover:bg-yellow-50",
      icon: (
        <Bookmark
          className={`h-4 w-4 ${
            isBookmarked ? "fill-yellow-500" : "fill-none"
          }`}
        />
      ),
      onClickFn: () => {
        setIsBookmarked(!isBookmarked);
      },
    },
  ];

  return (
    <div className="flex justify-between">
      {actions.map((action) => {
        return (
          <button
            key={action.name}
            className={`cursor-pointer rounded-full p-2 transition hover:scale-105 active:scale-95
               ${action.className}
            `}
            title={action.title}
            onClick={action.onClickFn}
          >
            <div className={`flex items-center gap-1 transition`}>
              {action.icon}
              {action.count !== undefined && (
                <span
                  className={"text-xs transition text-gray-500"}
                  style={action.textBoldStyle}
                >
                  {action.count}
                </span>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};
