const express = require('express');
const auth = require('../middleware/auth');
const upload = require('../middleware/multer');
const {
  addProject,
  getAllProjects,
  getProjectById,
  deleteProjectById,
  togglePublish,
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

route.get('/all', getAllProjects);
route.get('/:projectId', getProjectById);
route.post('/delete', auth, deleteProjectById);
route.post('/togglePublish', auth, togglePublish);

module.exports = route;
