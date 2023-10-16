import PostCard from "./PostCard";

type Props = { posts: BlogMetadata[] };
export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <li key={post.title}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
