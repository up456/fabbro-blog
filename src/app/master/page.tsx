import Image from "next/image";
import React from "react";

function MasterPage() {
  return (
    <section className="bg-[#faf4ef] h-full">
      <Image
        className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:translate-x-[-50%] lg:translate-y-[-50%] m-auto"
        src="/images/common/master.png"
        alt="master"
        width={332}
        height={751}
      />
      <div className="lg:absolute lg:top-1/4 lg:left-[13vw] p-7 font-bold">
        <div className="text-xl text-brown-sub">주인장:</div>
        <div>
          <span className="text-5xl text-brown-main">파브로</span>{" "}
          <span className="text-3xl text-brown-sub">FABBRO</span>
        </div>
        <MessageCard
          className="pt-3 text-brown-main"
          lineColor="bg-brown-sub"
          message={`안녕하세요. 개발자가 멋있어 보여서 개발를 시작한 주인장 파브로입니다. 멋있는 개발자가 되기위해서 끝없이 정진하겠습니다. 아자!`}
        />
        <ul className="mt-5 ml-2 flex flex-col gap-5">
          <InformationRow title="나이" description="33세" />
          <InformationRow title="MBTI" description="ISFJ" />
          <InformationRow title="포지션" description="Front-end" />
          <InformationRow title="이메일" description="4up456@gmail.com" />
        </ul>
      </div>
    </section>
  );
}

export default MasterPage;

interface MessageCardProps {
  message: string;
  className?: string;
  lineColor?: string;
}

const MessageCard = ({
  message,
  className,
  lineColor = "bg-black",
}: MessageCardProps) => {
  return (
    <article className={className}>
      <div className="flex items-center">
        <div className={`h-1.5 w-4 ${lineColor}`}></div>
        <div className={`h-0.5 w-full ${lineColor}`}></div>
      </div>
      <div className="lg:max-w-xs lg:whitespace-pre-line p-3 ">{message}</div>
      <div className="flex items-center">
        <div className={`h-0.5 w-full ${lineColor}`}></div>
        <div className={`h-1.5 w-4 ${lineColor}`}></div>
      </div>
    </article>
  );
};

interface InformationRowProps {
  title: string;
  description: string;
}

const InformationRow = ({ title, description }: InformationRowProps) => (
  <li>
    <span className="text-lg text-brown-sub">{`${title}: `}</span>
    <span className="text-lg text-brown-main">{description}</span>
  </li>
);
