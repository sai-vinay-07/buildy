const express = require('express');
const auth = require('../middleware/auth');
const upload = require('../middleware/multer');
const {
  addProject,
  getAllProjects,
  getAllProjectsForAdmin,
  getProjectById,
  deleteProjectById,
  togglePublish,
  generateProjectContent,
} = require('../controllers/projectController');

const router = express.Router();

// Secure admin operations
router.post(
  '/add',
  auth,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'wireframe', maxCount: 1 },
  ]),
  addProject
);

router.post('/generate', auth, generateProjectContent);
router.get('/all', getAllProjects);
router.get('/all/admin', auth, getAllProjectsForAdmin);
router.get('/:projectId', getProjectById);
router.post('/delete', auth, deleteProjectById);
router.post('/togglePublish', auth, togglePublish);

module.exports = router;
