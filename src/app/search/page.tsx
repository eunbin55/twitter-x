import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { PostSearch } from "@/components/posts/PostSearch";
import React, { Suspense } from "react";

export default function page() {
  return (
    <LayoutWrapper title="검색">
      <Suspense fallback={<div>검색 중...</div>}>
        <PostSearch />
      </Suspense>
    </LayoutWrapper>
  );
}
