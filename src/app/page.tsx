import Image from "next/image";

export default function HomePage() {
  return (
    <section className="relative">
      <Image
        className="w-full object-cover"
        src="/images/common/main-bg.jpg"
        width={1000}
        height={2000}
        alt="대장장이"
      />
      <div className="absolute top-0 w-full text-center py-32 text-white">
        <h1 className={`text-7xl mb-7 font-serif-kr`}>파브로 대장간</h1>
        <p className="text-3xl whitespace-pre-line">
          재미난 것을 만드는 곳입니다.
        </p>
      </div>
    </section>
  );
}
