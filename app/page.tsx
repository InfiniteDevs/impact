"use client";

import { products, testimonials} from "@/config";

import { FlipWords } from "@/components/ui/flip-words";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Home() {
  const join_words = [
  {
    text: "Get",
  },
  {
    text: "awesome",
  },
  {
    text: "websites",
  },
  {
    text: "with",
  },
  {
    text: "Impact.",
    className: "text-blue-500 dark:text-blue-500",
  },
];
  return (
    <>
      <HeroParallax products={products} />
      <div className="h-[30rem] flex justify-center items-center px-4 ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-[20rem]">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to success starts from here
        </p>
        <TypewriterEffectSmooth words={join_words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button>
        </div>
      </div>
    </>
  );
}


