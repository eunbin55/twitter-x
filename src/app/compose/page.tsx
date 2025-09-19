import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { PostCreate } from "@/components/posts/PostCreate";
import React from "react";

export default function page() {
  return (
    <LayoutWrapper title="새 게시물 작성">
      <PostCreate />
    </LayoutWrapper>
  );
}
