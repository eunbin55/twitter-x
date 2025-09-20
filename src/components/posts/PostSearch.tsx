"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchPosts } from "@/redux/slices/postSlice";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PostCard } from "./PostCard";

export const PostSearch = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const { posts, error } = useAppSelector((state) => state.post);

  useEffect(() => {
    const searchQuery = searchParams.get("query") || "";
    setQuery(searchQuery);

    if (searchQuery) {
      dispatch(fetchPosts({ page: 1, searchText: searchQuery }));
    }
  }, [dispatch, searchParams]);

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
