"use client";
import { useState } from "react";
import Categories from "./Categories";
import PostsGrid from "./PostsGrid";

type Props = {
  posts: BlogMetadata[];
  categories: string[];
};
const ALL_POSTS = "모두 보기";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_POSTS);
  const filtered =
    selectedCategory === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category.includes(selectedCategory));

  return (
    <section className="flex m-4">
      <PostsGrid posts={filtered} />
      <aside className="basis-[25%] max-w-[250px]">
        <Categories
          categories={[ALL_POSTS, ...categories]}
          selected={selectedCategory}
          onClick={setSelectedCategory}
        />
      </aside>
    </section>
  );
}
