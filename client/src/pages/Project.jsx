import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

import { useAppContext } from "../context/AppContent";
import toast from "react-hot-toast";

const Project = () => {
  const { id } = useParams();
  const { axios } = useAppContext();

  const [data, setData] = useState(null);

  const fetchProjectData = async () => {
    try {
      const { data } = await axios.get(`/api/project/${id}`);
      data.success ? setData(data.project) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  return data ? (
    <div className="relative bg-gray-50 min-h-screen">
      {/* Background Gradient */}
      <img
        src={assets.gradientBackground}
        alt="background"
        className="absolute -top-10 -z-10 w-full opacity-40"
      />

      <Navbar />

      {/* Main Content Wrapper */}
      <div
        className="relative z-10 flex flex-col-reverse lg:flex-row gap-12 items-start justify-between 
                   lg:px-20 md:px-12 sm:px-6 px-4 
                   lg:pt-16 md:pt-28 pt-10 pb-20"
      >
        {/* Left Content */}
        <div className="w-full lg:max-w-3xl text-gray-700">
          {/* Title */}
          <h2 className="sm:text-4xl text-2xl font-bold text-gray-900">
            {data.title}
          </h2>

          {/* Description */}
          {data.description && (
            <div
              className="prose prose-gray max-w-none mt-4 md:text-lg text-sm"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          )}

          {/* Difficulty */}
          {data.difficulty && (
            <p className="mt-4 text-sm font-medium">
              Difficulty:{" "}
              <span className="text-blue-600 underline">{data.difficulty}</span>
            </p>
          )}

          {/* Features */}
          {data.features && (
            <>
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
                Features
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-10">
                {data.features
                  .split(/\r?\n|\. /) // Split by newlines or period+space
                  .filter((item) => item.trim() !== "")
                  .map((feature, index) => (
                    <li key={index} className="leading-relaxed">
                      {feature.trim().replace(/^[-•✔️]?\s*/, "")}
                    </li>
                  ))}
              </ul>
            </>
          )}

          {/* Key Considerations */}
          {data.keyConsiderations && (
            <>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Key Considerations
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-10">
                {data.keyConsiderations
                  .split(/\r?\n|\. /)
                  .filter((item) => item.trim() !== "")
                  .map((point, index) => (
                    <li key={index} className="leading-relaxed">
                      {point.trim().replace(/^[-•✔️]?\s*/, "")}
                    </li>
                  ))}
              </ul>
            </>
          )}
        </div>

        {/* Right Content (Thumbnail + Links) */}
        <div
          className="w-full sm:max-w-[520px] md:max-w-[480px] lg:max-w-[420px] 
                     bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
        >
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-64 object-cover"
          />

          {/* Links Section */}
          <div className="px-6 py-6">
            <h2 className="text-gray-900 md:text-2xl text-xl font-semibold mb-4">
              {data.title}
            </h2>

            {/* Repo Link */}
            {data.repoLink && (
              <div className="mb-4">
                <h6 className="text-sm font-medium text-gray-500">
                  GitHub Repository
                </h6>
                <a
                  href={data.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center w-full py-3 rounded-lg 
                             border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
                >
                  Repo Link
                  <svg
                    className="ml-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            )}

            {/* YouTube Link */}
            {data.videoLink && (
              <div className="mb-4">
                <h6 className="text-sm font-medium text-gray-500">
                  YouTube Tutorial
                </h6>
                <a
                  href={data.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center w-full py-3 rounded-lg 
                             border border-red-500 text-red-500 font-medium hover:bg-red-50 transition"
                >
                  Watch Tutorial
                  <svg
                    className="ml-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            )}

            {/* Wireframes */}
            {data.wireframe && (
              <div>
                <h6 className="text-sm font-medium text-gray-500">
                  Wireframes
                </h6>
                <a
                  href={data.wireframe}
                  download
                  className="mt-2 inline-flex items-center justify-center w-full py-3 rounded-lg 
                             border border-green-500 text-green-600 font-medium hover:bg-green-50 transition"
                >
                  Download Wireframe
                  <svg
                    className="ml-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer with spacing above */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen text-xl text-gray-500">
      Loading...
    </div>
  );
};

export default Project;
