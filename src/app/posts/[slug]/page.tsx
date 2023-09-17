import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostData } from "@/service/posts";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";

type Props = {
  params: {
    slug: string;
  };
};
export default async function PostPage({ params: { slug } }: Props) {
  const decodedUrl = decodeURIComponent(slug).split("-");
  const urlPath = decodedUrl[1];
  const postYear = decodedUrl[0];

  const { title, description, date, content } = await getPostData(
    urlPath,
    postYear
  );

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${postYear}/${title}/thumbnail.jpg`}
        alt={title}
        width={1000}
        height={420}
      />
      <section className="flex flex-col p-4 w-full">
        <div className="flex items-center self-end text-sky-600">
          <AiTwotoneCalendar />
          <p className="font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
        <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
