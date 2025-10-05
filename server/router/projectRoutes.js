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
  generateProjectContent
} = require('../controllers/projectController');

const route = express.Router();

route.post('/add',
 auth,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'wireframe', maxCount: 1 }
  ]),
  addProject
);

route.post("/generate", auth , generateProjectContent);
route.get('/all', getAllProjects);
route.get('/all/admin', auth, getAllProjectsForAdmin);
route.get('/:projectId', getProjectById);
route.post('/delete', auth, deleteProjectById);
route.post('/togglePublish', auth, togglePublish);

module.exports = route;
