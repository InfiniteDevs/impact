"use client";

import { products, testimonials, join_words, words} from "@/config";

import { FlipWords } from "@/components/ui/flip-words";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Home() {
  
  return (
    <>
      
      <HeroParallax products={products} />
      <div className="h-[40rem] flex justify-center items-center px-4 ">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Build
          <FlipWords words={words} /> <br />
          Customer reivews
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-[40rem]  ">
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


