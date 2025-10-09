const fs = require('fs');
const path = require('path');
const Project = require('../models/project.js');
const { imagekit } = require('../config/imageKit');
const main = require('../config/geminiai');


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
    const imageUpload = await imagekit.upload({
      file: imageFile.buffer,
      fileName: imageFile.originalname,
      folder: '/projects/images',
    });
    const optimizeImageUrl = imagekit.url({
      path: imageUpload.filePath,
      transformation: [{ quality: 'auto' }, { format: 'webp' }, { width: '1280' }],
    });

    // Upload wireframe
    const wireframeFile = req.files.wireframe[0];
    const wireframeUpload = await imagekit.upload({
      file: wireframeFile.buffer,
      fileName: wireframeFile.originalname,
      folder: '/projects/wireframes',
    });
    const optimizeWireframeUrl = imagekit.url({
      path: wireframeUpload.filePath,
      transformation: [{ quality: 'auto' }, { format: 'webp' }, { width: '1280' }],
    });

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

const generateContent = async (req,res)=>{
  try {
    const {prompt} = req.body;
   const content =  await main(prompt + "Generate a short, simple project description based on the title and category . Keep it concise and easy to understand")
   res.status(200).json({ success : true , content})
  } catch (error) {
     res.status(500).json({ success : false , message : error.message})
  }
}


module.exports = {
  addProject,
  getAllProjects,
  getAllProjectsForAdmin,
  getProjectById,
  deleteProjectById,
  togglePublish,
  generateContent
};
