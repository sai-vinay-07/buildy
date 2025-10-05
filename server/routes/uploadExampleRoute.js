const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { imagekit } = require('../config/imageKit');

const router = express.Router();

// Multer setup for memory storage to avoid saving files locally
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to handle project upload with image and wireframe
router.post(
  '/upload-project',
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'wireframe', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      if (!req.body.project) {
        return res.status(400).json({ message: 'Project data is required' });
      }

      const project = JSON.parse(req.body.project);

      if (!req.files || !req.files.image || !req.files.wireframe) {
        return res.status(400).json({ message: 'Image and wireframe files are required' });
      }

      // Upload image file to ImageKit
      const imageFile = req.files.image[0];
      const imageUpload = await imagekit.upload({
        file: imageFile.buffer,
        fileName: imageFile.originalname,
        folder: '/projects/images',
      });

      // Upload wireframe file to ImageKit
      const wireframeFile = req.files.wireframe[0];
      const wireframeUpload = await imagekit.upload({
        file: wireframeFile.buffer,
        fileName: wireframeFile.originalname,
        folder: '/projects/wireframes',
      });

      // Prepare response data with uploaded URLs and project data
      const responseData = {
        project,
        imageUrl: imageUpload.url,
        wireframeUrl: wireframeUpload.url,
      };

      return res.status(201).json({
        message: 'Project uploaded successfully',
        data: responseData,
      });
    } catch (error) {
      console.error('Error uploading project:', error);
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
);

module.exports = router;
