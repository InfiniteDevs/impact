"use client";

import { testimonials } from "@/config";
import Link from "next/link";

import { Spotlight } from "@/components/ui/spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Testimonials from "@/components/sections/testimonials";
import HeroIcons from '@/components/sections/hero-icon'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Home() {
  const words = ["faster", "better", "beautiful", "modern"];
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
      <div className="relative pb-40 bg-black dark:bg-brand pt-20 md:pt-40 overflow-hidden px-2 rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="max-w-[84rem] w-full mx-auto  relative z-20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pb-40">
            <div className="flex flex-col items-start xl:px-0 px-8">
              <svg
                width="236"
                height="68"
                viewBox="0 0 236 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0.5H89C90.6569 0.5 92 1.84315 92 3.5V29C92 30.6569 93.3431 32 95 32H148.5C150.157 32 151.5 33.3431 151.5 35V64C151.5 65.6569 152.843 67 154.5 67H235.5"
                  stroke="url(#paint0_linear)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    gradientUnits="userSpaceOnUse"
                    x1="280"
                    y1="0"
                    x2="400.5"
                    y2="50"
                  >
                    <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
                    <stop stopColor="#2EB9DF"></stop>
                    <stop offset="1" stopColor="#9E00FF" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h1 className="text-3xl md:text-7xl font-bold mb-6 relative text-left dark:text-zinc-100 text-zinc-700 max-w-4xl">
                <span
                  className="tracking-tighter	text-4xl md:text-7xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
                  data-brr="1"
                >
                  Make your websites <br />
                  10x <FlipWords words={words} />
                </span>
              </h1>
              <h2 className="relative font-regular text-sm sm:text-xl text-zinc-500 tracking-wide mb-8 text-left max-w-2xl antialiased leading-loose __className_b15a0a">
                 Dreaming of having your own website? You're in the right place! Share your contact info, and we'll get in touch with you soon.
              </h2>
              <div className="flex sm:flex-row flex-col space-y-2 justify-center sm:space-y-0 sm:space-x-4 sm:justify-start mb-4 w-full">
                <a
                  className="bg-slate-900 no-underline flex space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-zinc-900 p-px font-semibold text-white px-4 py-2 w-full sm:w-52 h-14 rounded-2xl text-sm text-center items-center justify-center"
                  href="/contact"
                >
                 Contact
                </a>
                <a
                  className="w-full sm:w-52 text-sm bg-white bg-black dark:bg-black h-14 border border-transparent  dark:text-white dark:border-white flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                  href="/pricing"
                >
                  Pricing
                </a>
              </div>
              <HeroIcons />
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <BentoGrid className="max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto pb-16">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
      <div className="flex flex-col items-center justify-center h-[20rem]">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base ">
          The road to success starts from here
        </p>
        <TypewriterEffectSmooth words={join_words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <Link href="/contact">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Create your own
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Project 1",
    description: "Description of project 1",
    header: <Skeleton />,
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    header: <Skeleton />,
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    header: <Skeleton />,
  },
  {
    title: "Project 4",
    description: "Description of project 4",
    header: <Skeleton />,
  },
  {
    title: "Project 5",
    description: "Description of project 5",
    header: <Skeleton />,
  },
  {
    title: "Project 6",
    description: "Description of project 6",
    header: <Skeleton />,
  },
  {
    title: "Project 7",
    description: "Description of project 7",
    header: <Skeleton />,
  },
];
