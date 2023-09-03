import Image from "next/image";
import React from "react";

function Preparing() {
  return (
    <section className="h-full flex flex-col pt-[10%] items-center">
      <h1 className="text-5xl">준비 중...</h1>
      <Image
        className=""
        src="/images/common/preparing.jpg"
        width={564}
        height={564}
        alt="배경"
      />
    </section>
  );
}

export default Preparing;
