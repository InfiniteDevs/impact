"use client";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Pricing() {
  return (
    <div className="mt-40 mb-40">
      <BackgroundBeams />
      <div className="relative z-40 mx-auto">
        <div className="relative isolate bg-transparent px-6 py-0 sm:py-10 lg:px-8">
          <div
            className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h1 className="__className_b3f6a0 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Need custom components or websites? <br />
              <span className="relative bg-clip-text text-transparent bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8] z-10 dark:text-white">
                We&#x27;ve got you covered
              </span>
            </h1>
          </div>
          <p className="mx-auto mt-6 mb-20 max-w-lg text-center text-lg leading-8 text-gray-600 dark:text-gray-200">
            From custom components to complete website tailored to your needs.
            Simple pricing, no hidden fees.
          </p>

          <div className="mx-auto grid xl:max-w-[72rem] max-w-4xl md:max-w-4xl lg:max-w-4xl sm:max-w-xl md:max-w-xl sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 items-center xl:grid-cols-3">
            <BackgroundGradient>
              <div className="dark:bg-black dark:border-white/[0.2] bg-white/60  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
                <div className="">
                  <h3
                    id="tier-components-page"
                    className="text-emerald-600 text-base font-semibold leading-7"
                  >
                    Custom Components
                  </h3>
                  <p className="mt-4 gap-x-2">
                    <span className="dark:text-white text-gray-400 text-sm block h-6 dark:text-white">
                      pause or cancel anytime
                    </span>
                    <span className="text-gray-900 text-4xl font-bold tracking-tight dark:text-white">
                      ₹499
                    </span>
                  </p>
                  <p className="text-gray-600 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
                    Standalone components tailored to your needs and easily
                    integrated. Perfect for website elements or sections.
                  </p>
                  <ul
                    role="list"
                    className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100"
                  >
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      One component at a time
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      React / Next.js / Tailwind CSS code
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Design + Development
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Unlimited Revisions
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      24-hour support response time
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Private communication channel
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      4-7 days turnaround time
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Pause or cancel anytime
                    </li>
                  </ul>
                </div>
                <div>
                  <Link href="/contact">
                    <button
                      aria-describedby="tier-components-page"
                      className="text-emerald-600 ring-1 ring-inset ring-emerald-500 hover:ring-emerald-600 focus-visible:outline-emerald-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                    >
                      Buy Now
                    </button>
                  </Link>
                  <button className="text-xs text-neutral-500 mt-2 text-left">
                    Questions?
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px]">
              <div className="relative bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)]  shadow-2xl rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
                <div className="">
                  <h3
                    id="tier-pages-page"
                    className="text-emerald-400 text-base font-semibold leading-7"
                  >
                    Pages
                  </h3>
                  <p className="mt-4 gap-x-2">
                    <span className="text-gray-400 dark:text-white text-sm block h-6 dark:text-white">
                      pause or cancel anytime
                    </span>
                    <span className="text-white text-4xl font-bold tracking-tight dark:text-white">
                      ₹1999
                    </span>
                  </p>
                  <p className="text-gray-300 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
                    Best for early-stage startups and businesses that need a
                    marketing site and ongoing developmental work.
                  </p>
                  <ul
                    role="list"
                    className="text-gray-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100"
                  >
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      One request / page at a time
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      React / Next.js / Tailwind CSS code
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Design + Development
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Unlimited Revisions
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      CMS integration
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Search Engine Optimization
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      24-hour support response time
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Private communication channel
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      7-10 days turnaround time
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Pause or cancel anytime
                    </li>
                  </ul>
                </div>
                <div>
                  <Link href="/contact">
                    <button
                      aria-describedby="tier-pages-page"
                      className="bg-emerald-500 text-white shadow-sm hover:bg-emerald-400 focus-visible:outline-emerald-500 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                    >
                      Buy Now
                    </button>
                  </Link>
                  <button className="text-xs mt-2 text-left text-neutral-200">
                    Questions?
                  </button>
                </div>
              </div>
            </BackgroundGradient>{" "}
            <BackgroundGradient className="rounded-[22px]">
              <div className="dark:bg-black dark:border-white/[0.2] bg-white/60  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
                <div className="">
                  <h3
                    id="tier-multi-page"
                    className="text-emerald-600 text-base font-semibold leading-7"
                  >
                    Multi Page Website
                  </h3>
                  <p className="mt-4 gap-x-2">
                    <span className="dark:text-white text-gray-400 text-sm block h-6 dark:text-white">
                      starts at
                    </span>
                    <span className="text-gray-900 text-4xl font-bold tracking-tight dark:text-white">
                      ₹3499
                    </span>
                  </p>
                  <p className="text-gray-600 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
                    Best for small businesses and startups that need a
                    performant website that looks great and converts visitors to
                    customers.
                  </p>
                  <ul
                    role="list"
                    className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100"
                  >
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Multi-page landing page website
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Web Apps and SaaS Development
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      AI Apps development
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Design + Development
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      24-hour support response time
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Private communication channel
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Unlimited Revisions
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          strokeWidth="0"
                        ></path>
                      </svg>
                      Negotiable delivery time
                    </li>
                  </ul>
                </div>
                <div>
                  <Link href="/contact">
                    <button
                      aria-describedby="tier-multi-page"
                      className="text-emerald-600 ring-1 ring-inset ring-emerald-500 hover:ring-emerald-600 focus-visible:outline-emerald-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                    >
                      Contact Us
                    </button>
                  </Link>
                  <button className="text-xs text-neutral-500 mt-2 text-left">
                    Questions?
                  </button>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </div>
  );
}
