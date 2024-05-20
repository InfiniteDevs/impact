"use client";
import React, { useState } from "react";


export default function Footer() {
  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start ">
        <div>
          <div className="mr-4  md:flex mb-4">
            <a
              className="flex items-center justify-center space-x-2 text-2xl font-bold text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10 py-0"
              href="/"
            >
              <div className="relative h-8 w-8 md:h-6 md:w-6 bg-black border border-slate-800  text-white   flex items-center justify-center rounded-md text-sm antialiased">
                <div className="absolute h-10 w-full bg-white/[0.2] -top-10 inset-x-0 rounded-full blur-xl"></div>
                <div className="text-sm  text-emerald-500 relative z-20">
                  <img
                    alt="Logo"
                    loading="lazy"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    srcSet="https://www.aceternity.com/_next/image?url=%2Flogo.png&w=64&q=75 1x, https://www.aceternity.com/_next/image?url=%2Flogo.png&w=64&q=75 2x"
                    src="https://www.aceternity.com/_next/image?url=%2Flogo.png&w=64&q=75"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-black dark:text-white"> Impact Studios</h1>
              </div>
            </a>
          </div>
          <div>
            A product by{" "}
            <a
              href="/"
              target="__blank"
              className="dark:text-sky-500 text-neutral-600 font-medium"
            >
              Impact.
            </a>
          </div>
          <div className="mt-2">
            Building in public at{" "}
            <a
              className="dark:text-sky-500 font-medium text-neutral-600"
              target="__blank"
              href="https://www.whatismygoal.com/"
            >
              @whatismygoal
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 items-start mt-10 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/showcase"
            >
              Showcase
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/pricing"
            >
              Pricing
            </a>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <a
              target="__blank"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="https://youtube.com/"
            >
              Youtube
            </a>
            <a
              target="__blank"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="https://discord.gg/"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
