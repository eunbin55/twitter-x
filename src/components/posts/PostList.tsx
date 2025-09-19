"use client";
import React, { useEffect, useRef } from "react";
import { PostCard } from "./PostCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchPosts } from "@/redux/slices/postSlice";

export const PostList = () => {
  const dispatch = useAppDispatch();
  const { posts, page, hasMore, loading, error } = useAppSelector(
    (state) => state.post
  );
  const scrollTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchPosts({ page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    if (!scrollTargetRef.current || loading) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore)
        dispatch(fetchPosts({ page: page }));
    });
    observer.observe(scrollTargetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [dispatch, hasMore, loading, page]);

  if (error) return <div>error</div>;
  return (
    <div className="">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {hasMore && (
        <div
          ref={scrollTargetRef}
          className="flex justify-center items-center py-4"
        >
          <div className="animate-spin rounded-full mr-2 h-4 w-4 border-b-2 border-black"></div>
          <span>게시물 가져오는 중...</span>
        </div>
      )}
    </div>
  );
};
