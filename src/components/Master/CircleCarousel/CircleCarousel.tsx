"use client";
import React, { useEffect, useState } from "react";
import "./index.css";

const MAX_SLOT = 2;
const ITEM_GAP = 6;

function CircleCarousel() {
  const pathContainer = React.useRef<HTMLDivElement>(null);
  const ballsRef = React.useRef<HTMLDivElement>(null);
  const [slot, setSlot] = useState(0);

  function handleSlot(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { name } = e.currentTarget;
    if (name === "plus") {
      if (slot === MAX_SLOT) return;
      setSlot((prev) => prev + 1);
    } else {
      if (slot === -MAX_SLOT) return;
      setSlot((prev) => prev - 1);
    }
  }

  useEffect(() => {
    const balls = ballsRef.current
      ?.children as HTMLCollectionOf<HTMLDivElement>;
    for (let i = 0; i < balls.length; i++) {
      const distance = i * ITEM_GAP + ITEM_GAP * slot;
      if (distance < 0) {
        balls[i].animate(
          { opacity: [1, 0], transform: ["translateX(0)", "translateX(-50%)"] },
          { duration: 1000, fill: "both", easing: "ease-in-out" }
        );
      } else {
        balls[i].animate(
          { opacity: [1, 1], transform: ["translateX(-50%)", "translateX(0)"] },
          { fill: "both" }
        );
      }
      balls[i].animate(
        [
          { offsetDistance: balls[i].style.offsetDistance },
          { offsetDistance: `${distance}%` },
        ],
        {
          duration: 1000,
          fill: "both",
          easing: "ease-in-out",
        }
      );
    }
  }, [slot]);

  return (
    <section>
      <div
        ref={pathContainer}
        className="track-container xl:absolute xl:right-[25vw] xl:top-1/2 xl:translate-y-[-50%] xl:block hidden"
      >
        <div className="track" ref={ballsRef}>
          <div className="ball">1</div>
          <div className="ball">2</div>
          <div className="ball">3</div>
          <div className="ball">4</div>
          <div className="ball">5</div>
        </div>
        <button
          onClick={handleSlot}
          name="plus"
          className="absolute -right-36 top-[25vh] w-10 h-10 bg-red-400"
        >
          {">"}
        </button>
        <button
          onClick={handleSlot}
          name="minus"
          className="absolute right-28 top-[25vh] w-10 h-10 bg-red-400"
        >
          {"<"}
        </button>
      </div>
    </section>
  );
}

export default CircleCarousel;
