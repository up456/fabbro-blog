import React from "react";
import MessageCard from "./MessageCard";
import InformationRow from "./InformationRow";

function InformationSection() {
  return (
    <div className="lg:absolute lg:top-1/4 lg:left-[13vw] p-7 font-bold z-20">
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
  );
}

export default InformationSection;
