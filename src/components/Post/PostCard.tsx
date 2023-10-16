import { data } from "autoprefixer";
import Image from "next/image";
import Link from "next/link";

type Props = { post: BlogMetadata };
export default function PostCard({
  post: { title, description, date, category },
}: Props) {
  const postYear = date.toString().slice(0, 4);
  return (
    <Link href={`/posts/${postYear}-${title}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image
          className="w-full h-[260px] object-cover"
          src={`/images/posts/${postYear}/${title}/thumbnail.jpg`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-700">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <div className="flex gap-2">
            {category.map((it) => (
              <span
                key={it}
                className="text-sm rounded-lg text-orange-950 bg-orange-100 px-2 py-0.5 my-2"
              >
                {it}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
