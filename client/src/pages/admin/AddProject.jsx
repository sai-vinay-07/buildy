import React, { useState } from "react";
import { assets } from "../../assets/assets";

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    features: "",
    keyConstraints: "",
    thumbnail: null,
    repoLink: "",
    youtubeLink: "",
    wireframe: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(" Project Data:", formData);
    alert("Project Added Successfully!");
  };

  return (
    <div className="py-10 flex flex-col px-10 bg-white min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="md:p-10 p-4 space-y-6 max-w-2xl w-full"
      >
        {/* Heading */}
        <div className="flex items-center gap-3 mb-6 text-gray-700">
          <img src={assets.dashboard_icon_2} alt="Add Project" />
          <h2 className="text-xl font-semibold">Add New Project</h2>
        </div>

        {/* Project Title */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Project Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter project title"
            required
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400/40"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Project Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Briefly describe your project"
            required
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400/40 resize-none"
          />
        </div>

        {/* Features */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Features</label>
          <textarea
            name="features"
            value={formData.features}
            onChange={handleChange}
            rows={3}
            placeholder="List project features (comma or line separated)"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400/40 resize-none"
          />
        </div>

        {/* Key Constraints */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Key Constraints</label>
          <textarea
            name="keyConstraints"
            value={formData.keyConstraints}
            onChange={handleChange}
            rows={3}
            placeholder="Enter limitations or constraints"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400/40 resize-none"
          />
        </div>

        {/* Thumbnail Upload */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Thumbnail Image</label>
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            onChange={handleChange}
            required
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400/40"
          />
        </div>

        {/* Repo Link */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Repository Link</label>
          <input
            type="url"
            name="repoLink"
            value={formData.repoLink}
            onChange={handleChange}
            placeholder="https://github.com/your-repo"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400/40"
          />
        </div>

        {/* YouTube Link */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">YouTube Link</label>
          <input
            type="url"
            name="youtubeLink"
            value={formData.youtubeLink}
            onChange={handleChange}
            placeholder="https://youtube.com/watch?v=..."
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400/40"
          />
        </div>

        {/* Wireframe Upload */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Wireframe Image</label>
          <input
            type="file"
            name="wireframe"
            accept="image/*"
            onChange={handleChange}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400/40"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
