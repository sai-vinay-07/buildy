import React, { useEffect, useRef, useState } from "react";
import { assets, projectsCategories } from "../../assets/assets";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useAppContext } from "../../context/AppContent";
import toast from "react-hot-toast";
import { parse } from "marked";

const AddProject = () => {
  const { axios, fetchProjects } = useAppContext();

  const [isAdding, setIsAdding] = useState(false);
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);
  const [isGeneratingFeatures, setIsGeneratingFeatures] = useState(false);
  const [isGeneratingKeys, setIsGeneratingKeys] = useState(false);

  const descriptionRef = useRef(null);
  const featuresRef = useRef(null);
  const keyRef = useRef(null);
  const descriptionQuill = useRef(null);
  const featuresQuill = useRef(null);
  const keyQuill = useRef(null);

  const [image, setImage] = useState(null);
  const [wireframe, setWireframe] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [keyConsiderations, setKeyConsiderations] = useState("");
  const [category, setCategory] = useState("Startup");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [repoLink, setRepoLink] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  // Initialize Quill editors
  useEffect(() => {
    if (!descriptionQuill.current && descriptionRef.current) {
      descriptionQuill.current = new Quill(descriptionRef.current, {
        theme: "snow",
        placeholder: "Write a short description...",
      });
      descriptionQuill.current.on("text-change", () =>
        setDescription(descriptionQuill.current.root.innerHTML)
      );
    }
    if (!featuresQuill.current && featuresRef.current) {
      featuresQuill.current = new Quill(featuresRef.current, {
        theme: "snow",
        placeholder: "List main features...",
      });
      featuresQuill.current.on("text-change", () =>
        setFeatures(featuresQuill.current.root.innerHTML)
      );
    }
    if (!keyQuill.current && keyRef.current) {
      keyQuill.current = new Quill(keyRef.current, {
        theme: "snow",
        placeholder: "Add key considerations...",
      });
      keyQuill.current.on("text-change", () =>
        setKeyConsiderations(keyQuill.current.root.innerHTML)
      );
    }
  }, []);

  // Reset form
  const resetForm = () => {
    setImage(null);
    setWireframe(null);
    setTitle("");
    setDescription("");
    setFeatures("");
    setKeyConsiderations("");
    setCategory("Startup");
    setDifficulty("Beginner");
    setRepoLink("");
    setVideoLink("");
    setIsPublished(false);
    descriptionQuill.current?.setContents([]);
    featuresQuill.current?.setContents([]);
    keyQuill.current?.setContents([]);
  };

  // Generate description
  const generateDescription = async () => {
    if (!title || !category) {
      return toast.error("Please enter both Title and Category");
    }

    try {
      setIsGeneratingDescription(true);
      const { data } = await axios.post("/api/project/generate", {
        prompt: `${title} ${category}`,
        type: "description", // ✅ send type
      });

      if (data.success) {
        descriptionQuill.current.root.innerHTML = parse(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsGeneratingDescription(false);
    }
  };

  // Generate features
  const generateFeatures = async () => {
    if (!title || !category) {
      return toast.error("Please enter both Title and Category");
    }

    try {
      setIsGeneratingFeatures(true);
      const { data } = await axios.post("/api/project/generate", {
        prompt: `${title} ${category}`,
        type: "features", // ✅ send type
      });

      if (data.success) {
        featuresQuill.current.root.innerHTML = parse(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsGeneratingFeatures(false);
    }
  };

  // Generate key considerations
  const generateKeyConsiderations = async () => {
    if (!title || !category) {
      return toast.error("Please enter both Title and Category");
    }

    try {
      setIsGeneratingKeys(true);
      const { data } = await axios.post("/api/project/generate", {
        prompt: `${title} ${category}`,
        type: "keyConsiderations", // ✅ send type
      });

      if (data.success) {
        keyQuill.current.root.innerHTML = parse(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsGeneratingKeys(false);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsAdding(true);
    try {
      const project = {
        title,
        description,
        features,
        keyConsiderations,
        category,
        difficulty,
        repoLink,
        videoLink,
        isPublished,
      };

      const formData = new FormData();
      formData.append("project", JSON.stringify(project));
      if (image) formData.append("image", image);
      if (wireframe) formData.append("wireframe", wireframe);

      const { data } = await axios.post("/api/project/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data.success) {
        toast.success(data.message);
        resetForm();
        fetchProjects?.();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to add project"
      );
    } finally {
      setIsAdding(false);
    }
  };

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
            className="mt-2 h-16 rounded cursor-pointer object-cover"
            alt="Upload thumbnail"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            accept="image/*"
            required
          />
        </label>

        {/* Wireframe */}
        <p className="mt-4">Upload Wireframe</p>
        <label htmlFor="wireframe">
          <img
            src={
              !wireframe ? assets.upload_area : URL.createObjectURL(wireframe)
            }
            className="mt-2 h-16 rounded cursor-pointer object-cover"
            alt="Upload wireframe"
          />
          <input
            onChange={(e) => setWireframe(e.target.files[0])}
            type="file"
            id="wireframe"
            hidden
            accept="image/*"
            required
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

        {/* Category & Difficulty */}
        <div className="flex flex-col sm:flex-row sm:gap-4 mt-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 p-2 border text-gray-500 border-gray-300 outline-none rounded"
              required
            >
              <option value="">Select Category</option>
              {projectsCategories.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1 mt-3 sm:mt-0">
            <label className="block text-sm text-gray-700">Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="mt-2 p-2 border text-gray-500 border-gray-300 outline-none rounded"
              required
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4">Project Description</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={generateDescription}
            disabled={isGeneratingDescription}
            className="text-sm text-white bg-black/70 px-4 py-2 rounded hover:bg-black disabled:opacity-50"
          >
            {isGeneratingDescription ? "Generating..." : "Generate Description"}
          </button>
        </div>
        <div className="max-w-lg h-40 pb-16 pt-2 relative">
          <div ref={descriptionRef}></div>
        </div>

        {/* Features */}
        <p className="mt-4">Project Features</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={generateFeatures}
            disabled={isGeneratingFeatures}
            className="text-sm text-white bg-black/70 px-4 py-2 rounded hover:bg-black disabled:opacity-50"
          >
            {isGeneratingFeatures ? "Generating..." : "Generate Features"}
          </button>
        </div>
        <div className="max-w-lg h-40 pb-16 pt-2 relative">
          <div ref={featuresRef}></div>
        </div>

        {/* Key Considerations */}
        <p className="mt-4">Key Considerations</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={generateKeyConsiderations}
            disabled={isGeneratingKeys}
            className="text-sm text-white right-0 bottom-0 bg-black/70 px-4 py-2 rounded hover:bg-black disabled:opacity-50"
          >
            {isGeneratingKeys ? "Generating..." : "Generate Key Considerations"}
          </button>
        </div>
        <div className="max-w-lg h-40 pb-16 pt-2 relative">
          <div ref={keyRef}></div>
        </div>

        {/* Repo */}
        <p className="mt-4">Repository Link</p>
        <input
          onChange={(e) => setRepoLink(e.target.value)}
          value={repoLink}
          type="url"
          placeholder="GitHub URL"
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          required
        />

        {/* Video */}
        <p className="mt-4">Video Link</p>
        <input
          onChange={(e) => setVideoLink(e.target.value)}
          value={videoLink}
          type="url"
          placeholder="YouTube demo link"
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          required
        />

        {/* Publish */}
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
          disabled={isAdding}
          type="submit"
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isAdding ? "Adding..." : "Add Project"}
        </button>
      </div>
    </form>
  );
};

export default AddProject;
