import CircleCarousel from "@/components/Master/CircleCarousel/CircleCarousel";
import InformationSection from "@/components/Master/InformationSection";
import Image from "next/image";
import React from "react";

function MasterPage() {
  return (
    <section className="bg-[#faf4ef] h-full">
      <Image
        className="lg:absolute lg:top-1/2 lg:left-[47vw] lg:transform lg:translate-x-[-50%] lg:translate-y-[-50%] relative mx-auto z-10"
        src="/images/common/master.png"
        alt="master"
        width={332}
        height={751}
      />
      <InformationSection />
      <CircleCarousel />
    </section>
  );
}

export default MasterPage;
