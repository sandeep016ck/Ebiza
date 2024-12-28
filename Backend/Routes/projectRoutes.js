// Backend routes for project management
import express from 'express';
import { getProject,createProject, getProjectById, deleteProject } from '../Controllers/projectController';

const router = express.Router();

// Create a new project
router.post('/create',createProject );

// Fetch all projects
router.get('/all', getProject);

// Fetch a specific project by ID
router.get('/:id', getProjectById)

// Delete a project
router.delete('/:id',deleteProject);

export default router;
