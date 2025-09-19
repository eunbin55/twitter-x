import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { PostList } from "@/components/posts/PostList";

export default function Home() {
  return (
    <LayoutWrapper>
      <PostList />
    </LayoutWrapper>
  );
}
