import { Post } from "@/types/post";
import { Bookmark, Heart, MessageCircle, Repeat2 } from "lucide-react";
import React from "react";

export const PostActionBtns = ({ post }: { post: Post }) => {
  const actions = [
    {
      name: "comments",
      title: "댓글",
      className: "hover:text-blue-700",
      icon: <MessageCircle className="h-4 w-4" />,
      count: post.comments,
    },
    {
      name: "retweets",
      title: "재게시",
      className: `${post.isRetweeted ? "" : "hover:"}text-green-700`,
      icon: <Repeat2 className="h-4 w-4" />,
      count: post.retweets,
    },
    {
      name: "likes",
      title: "좋아요",
      className: `${post.isLiked ? "" : "hover:"}text-red-700`,
      icon: <Heart className="h-4 w-4" />,
      count: post.likes,
    },
    {
      name: "bookmark",
      title: "북마크",
      className: "hover:text-yellow-500",
      icon: <Bookmark className="h-4 w-4" />,
    },
  ];

  return (
    <div className="flex justify-between">
      {actions.map((action) => {
        return (
          <button
            key={action.name}
            className="cursor-pointer"
            title={action.title}
          >
            <div
              className={`flex items-center gap-1 ${action.className} transition`}
            >
              {action.icon}
              {action.count && <span className="text-xs">{action.count}</span>}
            </div>
          </button>
        );
      })}
    </div>
  );
};
