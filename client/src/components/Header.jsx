import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContent";

const Header = () => {
  const { setInput, input } = useAppContext();

  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="flex flex-col items-center text-center mt-15 mb-8">
        <div className="flex items-center gap-2 mb-10 border border-gray-300 rounded-full pl-2 pr-3 py-1 text-sm bg-white shadow-sm">
          <span className="flex items-center gap-1 text-indigo-600 font-medium">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4m7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1m-2 10a.75.75 0 0 1 .728.568.97.97 0 0 0 .704.704.75.75 0 0 1 0 1.456.97.97 0 0 0-.704.704.75.75 0 0 1-1.456 0 .97.97 0 0 0-.704-.704.75.75 0 0 1 0-1.456.97.97 0 0 0 .704-.704A.75.75 0 0 1 10 11"
                fill="#4F39F6"
              />
            </svg>
            Exciting update from Buildy!
          </span>
          <span className="text-gray-400 text-base">•</span>
          <a
            href="#"
            className="flex items-center gap-1 text-gray-500 hover:text-indigo-600 transition-colors"
          >
            See what’s new
            <svg
              className="mt-1"
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1 1 4 3.5L1 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <h1 className="text-center text-5xl leading-[68px] md:text-6xl md:leading-[80px] font-semibold max-w-3xl text-slate-800">
          Find Your <span className="text-blue-700">Project Idea</span> Today.
        </h1>
        <p className="my-6 sm:my-8 max-w-3xl m-auto max-sm:text-xs">
          Explore a complete hub of project ideas — from beginner to advanced —
          covering all technologies including Frontend, Backend, Full-Stack,
          Data Science, Cloud, and more. Gain hands-on experience and build a
          portfolio that stands out.
        </p>

        {/* Search bar with increased width */}
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between w-full max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden"
        >
          <input
            type="text"
            ref={inputRef}
            className="w-full pl-4 outline-none text-gray-500 placeholder-gray-500 text-sm"
            placeholder="Search for projects"
            required
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      <img
        src={assets.gradientBackground}
        alt="bg"
        className="absolute -top-50 -z-1"
      />
    </div>
  );
};

export default Header;
