import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { PostSearch } from "@/components/posts/PostSearch";
import React, { Suspense } from "react";

export default function page() {
  return (
    <LayoutWrapper title="검색">
      <Suspense>
        <PostSearch />
      </Suspense>
    </LayoutWrapper>
  );
}
