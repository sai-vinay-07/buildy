const mongoose = require("mongoose");

const projectsCategories = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "Data Science",
  "Machine Learning",
  "MERN Stack",
  "Cloud",
  "Blockchain",
];

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },

    description: { type: String, required: true },       // HTML content from Quill
    features: { type: String, required: true },          // HTML content
    keyConsiderations: { type: String, required: true }, // HTML content

    category: { type: String, enum: projectsCategories, required: true },
    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    repoLink: { type: String, required: true, default: "" },
    videoLink: { type: String, required: true, default: "" },

    image: { type: String, required: true, default: "" },      // Thumbnail file path / URL
    wireframe: { type: String, required: true, default: "" },  // Wireframe file path / URL

    isPublished: { type: Boolean, required: true, default: false }
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
