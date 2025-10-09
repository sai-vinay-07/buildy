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
  generateContent,
} = require('../controllers/projectController');

const router = express.Router();


// GET static routes
router.get('/all', getAllProjects);
router.get('/all/admin', auth, getAllProjectsForAdmin);

// POST static routes
router.post(
  '/add',
  auth,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'wireframe', maxCount: 1 },
  ]),
  addProject
);

router.post('/delete', auth, deleteProjectById);
router.post('/togglePublish', auth, togglePublish);
router.get('/:projectId', getProjectById);
router.post('/generate' , auth , generateContent );


module.exports = router;