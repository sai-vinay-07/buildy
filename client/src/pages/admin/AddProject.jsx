import React, { useEffect, useRef, useState } from "react";
import { assets, projectsCategories} from "../../assets/assets";

import Quill from "quill";
import "quill/dist/quill.snow.css"; // Quill styles

const AddProject = () => {
  const descriptionRef = useRef(null);
  const featuresRef = useRef(null);
  const keyRef = useRef(null);

  const descriptionQuill = useRef(null);
  const featuresQuill = useRef(null);
  const keyQuill = useRef(null);

  const [image, setImage] = useState(false);
  const [wireframe, setWireframe] = useState(false); // ✅ for wireframe upload

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [keyConsiderations, setKeyConsiderations] = useState("");
  const [category, setCategory] = useState("Startup");
  const [difficulty, setDifficulty] = useState("");
  const [repoLink, setRepoLink] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const projectData = {
      title,
      description,
      features,
      keyConsiderations,
      category,
      difficulty,
      repoLink,
      videoLink,
      isPublished,
      image,
      wireframe, // ✅ added wireframe to payload
    };

    console.log("Submitting Project:", projectData);
    // TODO: send to backend API
  };

  const generateContent = async () => {
    try {
      const prompt = `
      Generate the following project details:
      - Description (2–3 lines)
      - Features (bullet points)
      - Key Considerations (bullet points)
      for a project titled: "${title}" in category "${category}".
      `;

      const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (data.description) setDescription(data.description);
      if (featuresQuill.current) {
        featuresQuill.current.root.innerHTML = data.features;
        setFeatures(data.features);
      }
      if (keyQuill.current) {
        keyQuill.current.root.innerHTML = data.keyConsiderations;
        setKeyConsiderations(data.keyConsiderations);
      }
    } catch (err) {
      console.error("Error generating content:", err);
    }
  };

  useEffect(() => {
    if (!descriptionQuill.current && descriptionRef.current) {
      descriptionQuill.current = new Quill(descriptionRef.current, {
        theme: "snow",
        placeholder: "Write a short description...",
      });
      descriptionQuill.current.on("text-change", () => {
        setDescription(descriptionQuill.current.root.innerHTML);
      });
    }

    if (!featuresQuill.current && featuresRef.current) {
      featuresQuill.current = new Quill(featuresRef.current, {
        theme: "snow",
        placeholder: "List main features...",
      });
      featuresQuill.current.on("text-change", () => {
        setFeatures(featuresQuill.current.root.innerHTML);
      });
    }

    if (!keyQuill.current && keyRef.current) {
      keyQuill.current = new Quill(keyRef.current, {
        theme: "snow",
        placeholder: "Add key considerations...",
      });
      keyQuill.current.on("text-change", () => {
        setKeyConsiderations(keyQuill.current.root.innerHTML);
      });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        {/* Thumbnail */}
        <p>Upload Thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            className="mt-2 h-16 rounded cursor-pointer"
            alt=""
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>

        {/* Wireframe Upload */}
        <p className="mt-4">Upload Wireframe</p>
        <label htmlFor="wireframe">
          <img
            src={!wireframe ? assets.upload_area : URL.createObjectURL(wireframe)}
            className="mt-2 h-16 rounded cursor-pointer"
            alt=""
          />
          <input
            onChange={(e) => setWireframe(e.target.files[0])}
            type="file"
            id="wireframe"
            hidden
          />
        </label>

        {/* Title */}
        <p className="mt-4">Project Title</p>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
        />
        {/* Category & Difficulty (added) */}
        <div className="flex flex-col sm:flex-row sm:gap-4 mt-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className=" mt-2 p-2 border text-gray-500 border-gray-300 outline-none  rounded"
            >
              <option value=''>Select Category</option>
              {projectsCategories.map((item,index)=>{
                return <option key={index} value={item}>{item}</option>
              })}
            </select>
          </div>

          <div className="flex-1 mt-3 sm:mt-0">
            <label className="block text-sm text-gray-700">Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className=" mt-2 p-2 border text-gray-500 border-gray-300 outline-none  rounded"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4">Project Description</p>
        <div className="max-w-lg h-40 pb-16 pt-2 relative">
          <div ref={descriptionRef}></div>
        </div>

        {/* Features */}
        <p className="mt-4">Project Features</p>
        <div className="max-w-lg h-40 pb-16 pt-2 relative">
          <div ref={featuresRef}></div>
        </div>

        {/* Key Considerations */}
        <p className="mt-4">Key Considerations</p>
        <div className="max-w-lg h-40 pb-16 pt-2 relative">
          <div ref={keyRef}></div>
        </div>

        {/* AI Button */}
        <button
          className="mt-4 text-sm text-white bg-black/70 px-4 py-2 rounded hover:bg-black"
          type="button"
          onClick={generateContent}
        >
          Generate with AI
        </button>

        {/* Repo Link */}
        <p className="mt-4">Repository Link</p>
        <input
          onChange={(e) => setRepoLink(e.target.value)}
          value={repoLink}
          type="url"
          placeholder="GitHub URL"
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
        />

        {/* Video Link */}
        <p className="mt-4">Video Link</p>
        <input
          onChange={(e) => setVideoLink(e.target.value)}
          value={videoLink}
          type="url"
          placeholder="YouTube demo link"
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
        />

        {/* Publish Toggle */}
        <div className="flex items-center mt-4 gap-2">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
          />
          <label>Publish Project</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Save Project
        </button>
      </div>
    </form>
  );
};

export default AddProject;
