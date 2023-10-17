import CircleCarousel from "@/components/Master/CircleCarousel/CircleCarousel";
import InformationSection from "@/components/Master/InformationSection";
import Image from "next/image";
import React from "react";

function MasterPage() {
  return (
    <section className="bg-[#faf4ef] h-full">
      <section>
        <Image
          className="xl:absolute xl:top-1/2 xl:left-[47vw] xl:transform xl:translate-x-[-50%] xl:translate-y-[-50%] relative mx-auto z-10"
          src="/images/common/master.png"
          alt="master"
          width={332}
          height={751}
        />
      </section>
      <InformationSection />
      <CircleCarousel />
    </section>
  );
}

export default MasterPage;
