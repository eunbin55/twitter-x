"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchPosts } from "@/redux/slices/postSlice";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { PostCard } from "./PostCard";

export const PostSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const dispatch = useAppDispatch();

  const { posts, error } = useAppSelector((state) => state.post);

  useEffect(() => {
    if (query) {
      dispatch(fetchPosts({ page: 1, searchText: query }));
    }
  }, [dispatch, query]);

  if (error) return <div> {error.message}</div>;
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">{`검색 결과: "${query}"`}</h1>
      {posts.length === 0 ? (
        <div>검색 결과가 없습니다.</div>
      ) : (
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};
