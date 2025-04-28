import React from "react";
import { CHANGELOG } from "@/constants/changelog.config";

const Changelog = () => {
  return (
    <div className="max-w-3xl  md:mx-auto mx-8 md:my-8 xl:my-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center  ">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-2 text-sm font-semibold">
            Life Updates
          </div>

          <p className="text-muted-foreground md:text-base/relaxed py-4">
            Follow along with my journey. Here are some of the major updates from my life lately.{" "}
          </p>
        </div>
      </div>
      <div className="divide-zinc-800 relative">
        <div className="absolute h-full w-[4px] bg-gradient-to-b from-transparent via-cyan-500 to:transparent -left-4 md:-left-10"></div>
        {CHANGELOG.map((yearData, index) => (
          <div key={index} className="border-b border-zinc-800 border-dashed">
            <h1 className="text-xl font-bold  my-8 relative">
              <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
              {yearData.year}
            </h1>
            <div className="mb-8">
              {yearData.events.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className="flex flex-row space-x-2 items-start my-2"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="text-cyan-400 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="text-zinc-400 text-sm md:text-base">
                    {event}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Changelog;
