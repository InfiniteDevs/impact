"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function BackgroundGradientDemo() {
  return (
    <div className="pt-40">
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

          <div className="mx-auto grid xl:max-w-[72rem] max-w-xl grid-cols-1 gap-4 items-center xl:grid-cols-3">
            <BackgroundGradient className="rounded-[22px]">
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
                      ₹3499
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
                        ></path>
                      </svg>
                      Pause or cancel anytime
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    aria-describedby="tier-components-page"
                    className="text-emerald-600 ring-1 ring-inset ring-emerald-500 hover:ring-emerald-600 focus-visible:outline-emerald-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                  >
                    Buy Now
                  </button>
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
                      ₹4995
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-400 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
                        ></path>
                      </svg>
                      Pause or cancel anytime
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    aria-describedby="tier-pages-page"
                    className="bg-emerald-500 text-white shadow-sm hover:bg-emerald-400 focus-visible:outline-emerald-500 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                  >
                    Buy Now
                  </button>
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
                      ₹12,499
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
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
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600 h-6 w-5 flex-none"
                        aria-hidden="true"
                      >
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          fill="currentColor"
                          stroke-width="0"
                        ></path>
                      </svg>
                      Negotiable delivery time
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    aria-describedby="tier-multi-page"
                    className="text-emerald-600 ring-1 ring-inset ring-emerald-500 hover:ring-emerald-600 focus-visible:outline-emerald-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                  >
                    Contact Us
                  </button>
                  <button className="text-xs text-neutral-500 mt-2 text-left">
                    Questions?
                  </button>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        </div>
        <div className="lg:max-w-7xl max-w-2xl mx-auto py-20 sm:py-40">
          <h2 className="__className_b3f6a0 mt-2 text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white sm:text-5xl">
            We&#x27;ve worked with amazing founders
          </h2>
          <ul className="isolate grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 mt-20">
            <li className="flex rounded-xl bg-gray-50 dark:bg-[#161618] ring-1 ring-gray-950/5 shadow relative overflow-hidden">
              <figure className="flex w-full flex-col items-start p-8">
                <blockquote className="mb-auto text-base/6 text-gray-950 dark:text-white">
                  <p className="relative before:absolute before:right-full before:top-0 before:content-[&#x27;“&#x27;] after:content-[&#x27;”&#x27;]">
                    Manu is the man! He is the best front-end developer I have
                    worked with. He took the requirements and quite literally
                    ran with them. We are super happy with the result and
                    product we got. He&#x27;s very intelligent, experienced,
                    friendly, and helpful. To anyone reading this - I can&#x27;t
                    recommend this Manu enough, your job will be done
                    exceptionally well, and you will be delighted with the end
                    result.
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex w-full items-center justify-between">
                  <dl className="flex flex-wrap text-sm">
                    <dt className="sr-only">Name</dt>
                    <dd className="w-full flex-none font-medium text-gray-950 dark:text-neutral-200">
                      John Shahawy
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-0.5 text-gray-600 dark:text-neutral-300">
                      Founder at Rogue and Moonbeam
                    </dd>
                  </dl>
                  <div className="relative flex-none overflow-hidden rounded-lg bg-black/2.5">
                    <img
                      alt="avatar"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      className="size-12"
                      srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Fjohn.jpeg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Fjohn.jpeg&amp;w=96&amp;q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonials%2Fjohn.jpeg&amp;w=96&amp;q=75"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="flex rounded-xl ring-1 ring-gray-950/5 shadow relative overflow-hidden z-10 row-span-2 bg-white dark:bg-zinc-800">
              <div className="absolute left-1/2 top-0 h-full w-full -ml-20 -mt-2 dark:[mask-image:linear-gradient(white,transparent)]">
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/30 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30 dark:opacity-100">
                  <svg
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full  fill-brand/20 stroke-black/20 mix-blend-overlay dark:fill-brand/20 dark:stroke-white/10"
                  >
                    <defs>
                      <pattern
                        id=":S1:"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                        x="-12"
                        y="4"
                      >
                        <path d="M.5 20V.5H20" fill="none"></path>
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      stroke-width="0"
                      fill="url(#:S1:)"
                    ></rect>
                    <svg x="-12" y="4" className="overflow-visible">
                      <rect
                        stroke-width="0"
                        width="21"
                        height="21"
                        x="80"
                        y="60"
                      ></rect>
                      <rect
                        stroke-width="0"
                        width="21"
                        height="21"
                        x="40"
                        y="20"
                      ></rect>
                      <rect
                        stroke-width="0"
                        width="21"
                        height="21"
                        x="140"
                        y="60"
                      ></rect>
                      <rect
                        stroke-width="0"
                        width="21"
                        height="21"
                        x="200"
                        y="120"
                      ></rect>
                    </svg>
                  </svg>
                </div>
              </div>
              <figure className="flex w-full flex-col items-start p-8">
                <blockquote className="mb-auto text-base/6 text-gray-950 dark:text-white">
                  <p className="relative before:absolute before:right-full before:top-0 before:content-[&#x27;“&#x27;] after:content-[&#x27;”&#x27;] text-xl font-medium">
                    I&#x27;ve been working with Manu for a couple of months now
                    and I can&#x27;t express enough how impressed I am with his
                    talent. Manu&#x27;s JavaScript/React web UI programming
                    skills are through the roof. He&#x27;s helped take a boring
                    website and made it highly dynamic and visually compelling.
                    What amazes me is how fast he works and how easy it is to
                    coordinate with him. He jumped right into an Astro framework
                    project, and we have a streamlined workflow that provides
                    him access to Figma, a GitHub repo, and a Slack channel.
                    He&#x27;s extremely responsive and communication is brief,
                    efficient, and effective. If Manu says he can do something,
                    rest assured he can, he will, and it will be awesome. I
                    can&#x27;t speak highly enough of Manu; if you&#x27;re
                    considering working with him, do it; you&#x27;ll be glad you
                    did.
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex w-full items-center justify-between">
                  <dl className="flex flex-wrap text-sm">
                    <dt className="sr-only">Name</dt>
                    <dd className="w-full flex-none font-medium text-gray-950 dark:text-neutral-200">
                      Tony Pujals
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-0.5 text-gray-600 dark:text-neutral-300">
                      Founder at Fantastic Realms, Tech Lead at Google
                    </dd>
                  </dl>
                  <div className="relative flex-none overflow-hidden rounded-lg bg-black/2.5">
                    <img
                      alt="avatar"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      className="size-12"
                      srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Ftony.jpeg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Ftony.jpeg&amp;w=96&amp;q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonials%2Ftony.jpeg&amp;w=96&amp;q=75"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
                  </div>
                </figcaption>
              </figure>
            </li>

            <li className="flex rounded-xl bg-gray-50 dark:bg-[#161618] ring-1 ring-gray-950/5 shadow relative overflow-hidden">
              <figure className="flex w-full flex-col items-start p-8">
                <blockquote className="mb-auto text-base/6 text-gray-950 dark:text-white">
                  <p className="relative before:absolute before:right-full before:top-0 before:content-[&#x27;“&#x27;] after:content-[&#x27;”&#x27;]">
                    Excellent communication and professionalism from the start
                    and throughout. Happily and calmly accepted and entertained
                    a few additional out-of-scope requests as well. Good
                    open-minded approach to suggestions, ideas and feedback and
                    a humble way to deal with differences in understanding. An
                    excellent experience overall, we will certainly re-engage
                    Manu for future requirements, can&#x27;t wait to do another
                    job together.
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex w-full items-center justify-between">
                  <dl className="flex flex-wrap text-sm">
                    <dt className="sr-only">Name</dt>
                    <dd className="w-full flex-none font-medium text-gray-950 dark:text-neutral-200">
                      Henrik Söderlund
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-0.5 text-gray-600 dark:text-neutral-300">
                      Former CTO at Creme Digital
                    </dd>
                  </dl>
                  <div className="relative flex-none overflow-hidden rounded-lg bg-black/2.5">
                    <img
                      alt="avatar"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      className="size-12"
                      srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Fhenrik.jpeg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Fhenrik.jpeg&amp;w=96&amp;q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonials%2Fhenrik.jpeg&amp;w=96&amp;q=75"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="flex rounded-xl bg-gray-50 dark:bg-[#161618] ring-1 ring-gray-950/5 shadow relative overflow-hidden">
              <figure className="flex w-full flex-col items-start p-8">
                <blockquote className="mb-auto text-base/6 text-gray-950 dark:text-white">
                  <p className="relative before:absolute before:right-full before:top-0 before:content-[&#x27;“&#x27;] after:content-[&#x27;”&#x27;]">
                    Manu is a genius. He is open-minded, curious and deeply
                    invested in the projects he chooses to work on. He takes
                    your vision and brings it to life -- and is a true partner
                    in the process. He&#x27;s brilliant!
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex w-full items-center justify-between">
                  <dl className="flex flex-wrap text-sm">
                    <dt className="sr-only">Name</dt>
                    <dd className="w-full flex-none font-medium text-gray-950 dark:text-neutral-200">
                      Meru Gokhale
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-0.5 text-gray-600 dark:text-neutral-300">
                      Founder at Editorially, Editrix
                    </dd>
                  </dl>
                  <div className="relative flex-none overflow-hidden rounded-lg bg-black/2.5">
                    <img
                      alt="avatar"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      className="size-12"
                      srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Fmeru.webp&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Fmeru.webp&amp;w=96&amp;q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonials%2Fmeru.webp&amp;w=96&amp;q=75"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="flex rounded-xl bg-gray-50 dark:bg-[#161618] ring-1 ring-gray-950/5 shadow relative overflow-hidden">
              <figure className="flex w-full flex-col items-start p-8">
                <blockquote className="mb-auto text-base/6 text-gray-950 dark:text-white">
                  <p className="relative before:absolute before:right-full before:top-0 before:content-[&#x27;“&#x27;] after:content-[&#x27;”&#x27;]">
                    This service exceeded our expectations, since not only was
                    the development technically flawless, but Manu and his team
                    also acted as strategic partners by encouraging us to add a
                    project page and testimonials. We are very happy with our
                    decision to hire Manu.
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex w-full items-center justify-between">
                  <dl className="flex flex-wrap text-sm">
                    <dt className="sr-only">Name</dt>
                    <dd className="w-full flex-none font-medium text-gray-950 dark:text-neutral-200">
                      Georg Weingartner
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-0.5 text-gray-600 dark:text-neutral-300">
                      CMO at Renderwork
                    </dd>
                  </dl>
                  <div className="relative flex-none overflow-hidden rounded-lg bg-black/2.5">
                    <img
                      alt="avatar"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      className="size-12"
                      srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Fgeorg.jpeg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Fgeorg.jpeg&amp;w=96&amp;q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonials%2Fgeorg.jpeg&amp;w=96&amp;q=75"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="flex rounded-xl bg-gray-50 dark:bg-[#161618] ring-1 ring-gray-950/5 shadow relative overflow-hidden">
              <figure className="flex w-full flex-col items-start p-8">
                <blockquote className="mb-auto text-base/6 text-gray-950 dark:text-white">
                  <p className="relative before:absolute before:right-full before:top-0 before:content-[&#x27;“&#x27;] after:content-[&#x27;”&#x27;]">
                    Manu was quick to respond, very professional, and delivered
                    a website within a week. Very good job. Looking forward to
                    collaborating again
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex w-full items-center justify-between">
                  <dl className="flex flex-wrap text-sm">
                    <dt className="sr-only">Name</dt>
                    <dd className="w-full flex-none font-medium text-gray-950 dark:text-neutral-200">
                      Asriel Han
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-0.5 text-gray-600 dark:text-neutral-300">
                      Founder, CTO at Advex AI
                    </dd>
                  </dl>
                  <div className="relative flex-none overflow-hidden rounded-lg bg-black/2.5">
                    <img
                      alt="avatar"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      className="size-12"
                      srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Fasriel.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Fasriel.png&amp;w=96&amp;q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonials%2Fasriel.png&amp;w=96&amp;q=75"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="flex rounded-xl bg-gray-50 dark:bg-[#161618] ring-1 ring-gray-950/5 shadow relative overflow-hidden">
              <figure className="flex w-full flex-col items-start p-8">
                <blockquote className="mb-auto text-base/6 text-gray-950 dark:text-white">
                  <p className="relative before:absolute before:right-full before:top-0 before:content-[&#x27;“&#x27;] after:content-[&#x27;”&#x27;]">
                    Manu was such a pleasure to work with. Talented,
                    communicative and fast. Highly recommend!
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex w-full items-center justify-between">
                  <dl className="flex flex-wrap text-sm">
                    <dt className="sr-only">Name</dt>
                    <dd className="w-full flex-none font-medium text-gray-950 dark:text-neutral-200">
                      Jonathan Barshop
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-0.5 text-gray-600 dark:text-neutral-300">
                      Founder at Barshop Studios
                    </dd>
                  </dl>
                  <div className="relative flex-none overflow-hidden rounded-lg bg-black/2.5">
                    <img
                      alt="avatar"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      className="size-12"
                      srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Fjonathan.jpeg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Fjonathan.jpeg&amp;w=96&amp;q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonials%2Fjonathan.jpeg&amp;w=96&amp;q=75"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
