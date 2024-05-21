"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Spotlight } from "@/components/ui/spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Testimonials from "@/components/sections/testimonials";
import HeroIcons from '@/components/sections/hero-icon'

export default function Home() {
  const words = ["faster", "better", "beautiful", "modern"];
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
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
                Dreaming of having your own website? You're in the right place!
                Share your contact info, and we'll get in touch with you soon.
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
      <div className="w-full sm:px-6 sm:py-10 lg:px-8 bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl py-24 ">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 to-slate-500 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto py-10 lg:py-10 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-4">
                Let&#x27; talk and make it happen
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-200">
                <span data-br=":R9iuul5a:" data-brr="1">
                  Reach out to us, and we&#x27;ll respond as soon as possible.
                </span>
              </p>
              <button
                pirsch-event="CTA Click"
                className="bg-slate-900 no-underline w-full sm:w-fit group mb-4 cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6  text-white block mt-6"
              >
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative flex space-x-2 items-center justify-center z-10 rounded-full bg-zinc-950 py-4 px-8 ring-1 ring-white/10 ">
                  <span>Talk to us</span>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button>
              <div className="mt-10">
                <div className="flex flex-row mb-10 lg:justify-start justify-center items-center">
                  <AnimatedTooltip items={people} />
                </div>
              </div>
            </div>
            <div className="relative  hidden lg:flex">
              <img
                alt="screenshot"
                fetchPriority="high"
                width="1824"
                height="1800"
                decoding="async"
                data-nimg="1"
                className="absolute left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-0 -top-2 bottom-0 w-[30rem] lg:w-[45rem]  max-w-none  "
                srcSet="/_next/image?url=%2Fimages%2Fcta.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcta.png&amp;w=3840&amp;q=75 2x"
                src="/_next/image?url=%2Fimages%2Fcta.png&amp;w=3840&amp;q=75"
              />
            </div>
          </div>
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
