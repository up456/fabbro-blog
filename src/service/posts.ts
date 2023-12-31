import { metadata } from "./../app/layout";
import { readFile } from "fs/promises";
import path from "path";

export async function getFeaturedPosts(): Promise<BlogMetadata[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<BlogMetadata[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<BlogMetadata[]> {
  const filePath = path.join(process.cwd(), "data", "metadata.json");
  return readFile(filePath, "utf-8")
    .then<BlogMetadata[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(
  fileName: string,
  postYear: string
): Promise<BlogMetadataWithContent> {
  const filePath = path.join(
    process.cwd(),
    "data",
    "posts",
    postYear,
    `${fileName}.md`
  );
  const metadata = await getAllPosts() //
    .then((posts) => posts.find((post) => post.title === fileName));
  if (!metadata)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const content = await readFile(filePath, "utf-8");
  return { ...metadata, content };
}
