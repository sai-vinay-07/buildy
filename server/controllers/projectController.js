const fs = require('fs');
const { imagekit } = require('../config/imageKit')
const Project = require('../models/project');
const path = require('path');

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

    // Check all required fields
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

    //  Upload project image
    const imageFile = req.files.image[0];
    const imageBuffer = fs.readFileSync(imageFile.path);
    const imageUpload = await imagekit.upload({
      file: imageBuffer,
      fileName: imageFile.originalname,
      folder: '/projects/images',
    });

    // Optimize project image URL
    const optimizeImageUrl = imagekit.url({
      path: imageUpload.filePath,
      transformation: [
        { quality: 'auto' },
        { format: 'webp' },
        { width: '1280' },
      ],
    });

    // remove local file
    fs.unlinkSync(imageFile.path);

    // Upload wireframe image
    const wireframeFile = req.files.wireframe[0];
    const wireframeBuffer = fs.readFileSync(wireframeFile.path);
    const wireframeUpload = await imagekit.upload({
      file: wireframeBuffer,
      fileName: wireframeFile.originalname,
      folder: '/projects/wireframes',
    });

    //  Optimize wireframe image URL
    const optimizeWireframeUrl = imagekit.url({
      path: wireframeUpload.filePath,
      transformation: [
        { quality: 'auto' },
        { format: 'webp' },
        { width: '1280' },
      ],
    });

    // remove local file
    fs.unlinkSync(wireframeFile.path);

    // Save to DB
    const newProject = new Project({
      title,
      description,
      features,
      keyConsiderations,
      category,
      difficulty,
      repoLink,
      videoLink,
      image: optimizeImageUrl,      // optimized project image
      wireframe: optimizeWireframeUrl, // optimized wireframe
      isPublished,
    });

    await newProject.save();

    return res.status(201).json({
      message: 'Project added successfully',
      project: newProject,
    });
  } catch (error) {
    console.error('Error adding project:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getAllProjects = async(req,res)=>{
  try {
    const projects = await Project.find({isPublished : true})
     return res.status(201).json({projects})
  } catch (error) {
    console.error('Error fetch all project:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}

const getProjectById = async (req,res)=>{
  try {
    const {projectId} = req.parse;
    const project = await Project.findById(projectId)
    if(!project){
      res.status(401).json({message : "Project is not found"})
    }

    return res.status(200).json({project})

  } catch (error) {
    console.error('Error fetch project by Id:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  
  }
}


const deleteProjectById = async (req,res)=>{
  try {
    const {id} = req.body;
     await Project.findByIdAndDelete(id)
    return res.status(200).json({ message : "Project Successfully Deleted!"})

  } catch (error) {
    console.error('Error delete project by Id:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  
  }
}

const togglePublish = async (req,res)=>{
  try {
    const {id} = req.body;
    const project = await Project.findById(id)
    project.isPublished = !project.isPublished;
    await project.save();
    res.status(200).json({ message : "Project Status Updated "})
  } catch (error) {
    
  }
}


module.exports = { addProject, getAllProjects, getProjectById, deleteProjectById, togglePublish  };
