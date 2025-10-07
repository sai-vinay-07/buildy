const fs = require('fs');
const path = require('path');
const Project = require('../models/project');
const { imagekit } = require('../config/imageKit');
const { runGemini } = require('../config/gemini');

const addProject = async (req, res) => {
  try {
    const {
      title,
      description,
      features,
      keyConsiderations,
      category,
      difficulty,
      repoLink,
      videoLink,
      isPublished,
    } = JSON.parse(req.body.project);

    if (
      !title ||
      !description ||
      !features ||
      !keyConsiderations ||
      !category ||
      !difficulty ||
      !repoLink ||
      !videoLink ||
      !req.files?.image ||
      !req.files?.wireframe ||
      typeof isPublished === 'undefined'
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Upload project image
    const imageFile = req.files.image[0];
    const imageBuffer = fs.readFileSync(imageFile.path);
    const imageUpload = await imagekit.upload({
      file: imageBuffer,
      fileName: imageFile.originalname,
      folder: '/projects/images',
    });
    const optimizeImageUrl = imagekit.url({
      path: imageUpload.filePath,
      transformation: [{ quality: 'auto' }, { format: 'webp' }, { width: '1280' }],
    });
    fs.unlinkSync(imageFile.path);

    // Upload wireframe
    const wireframeFile = req.files.wireframe[0];
    const wireframeBuffer = fs.readFileSync(wireframeFile.path);
    const wireframeUpload = await imagekit.upload({
      file: wireframeBuffer,
      fileName: wireframeFile.originalname,
      folder: '/projects/wireframes',
    });
    const optimizeWireframeUrl = imagekit.url({
      path: wireframeUpload.filePath,
      transformation: [{ quality: 'auto' }, { format: 'webp' }, { width: '1280' }],
    });
    fs.unlinkSync(wireframeFile.path);

    const newProject = new Project({
      title,
      description,
      features,
      keyConsiderations,
      category,
      difficulty,
      repoLink,
      videoLink,
      image: optimizeImageUrl,
      wireframe: optimizeWireframeUrl,
      isPublished,
    });

    await newProject.save();

    res.status(201).json({
      success: true,
      message: 'Project added successfully',
      project: newProject,
    });
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// --- Remaining CRUD and AI endpoints ---

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({ isPublished: true });
    res.status(200).json({ success: true, projects });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

const getAllProjectsForAdmin = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json({ success: true, projects });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ success: false, message: 'Not found' });
    res.status(200).json({ success: true, project });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

const deleteProjectById = async (req, res) => {
  try {
    const { id } = req.body;
    await Project.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const project = await Project.findById(id);
    project.isPublished = !project.isPublished;
    await project.save();
    res.status(200).json({ success: true, message: 'Status updated' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

const generateProjectContent = async (req, res) => {
  try {
    const { type, title, category } = req.body;
    if (!type || !title || !category)
      return res.status(400).json({ success: false, message: 'Missing required fields' });

    let prompt = '';
    let generatedContent = {};

    if (type === 'description') {
      prompt = `Generate a project description for a ${category} project titled "${title}".`;
      const description = await runGemini(prompt);
      generatedContent = { description };
    } else if (type === 'features') {
      prompt = `Generate a JSON array of 5-7 key features for a ${category} project titled "${title}".`;
      const response = await runGemini(prompt);
      generatedContent = { features: JSON.parse(response.trim()) };
    } else if (type === 'keyConsiderations') {
      prompt = `Generate a JSON array of 5-7 key considerations for a ${category} project titled "${title}".`;
      const response = await runGemini(prompt);
      generatedContent = { keyConsiderations: JSON.parse(response.trim()) };
    }

    res.json({ success: true, generated: generatedContent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  addProject,
  getAllProjects,
  getAllProjectsForAdmin,
  getProjectById,
  deleteProjectById,
  togglePublish,
  generateProjectContent,
};
