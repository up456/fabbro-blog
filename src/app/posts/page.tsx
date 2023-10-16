import FilterablePosts from "@/components/Post/FilterablePosts";
import { getAllPosts } from "@/service/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category).flat())];
  return <FilterablePosts posts={posts} categories={categories} />;
}
