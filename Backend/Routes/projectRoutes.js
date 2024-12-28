// Backend routes for project management
import express from 'express';
import { getProject,createProject, getProjectbyId } from '../Controllers/projectController';

const router = express.Router();

// Create a new project
router.post('/create',createProject );

// Fetch all projects
router.get('/all', getProject);

// Fetch a specific project by ID
router.get('/:id', getProjectbyId)

// Update a project
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { projectHed, projectDes, projectPic, fundtobeRaised, fundRaised } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid project ID.' });
    }

    try {
        const updatedProject = await Project.findByIdAndUpdate(
            id,
            { projectHed, projectDes, projectPic, fundtobeRaised, fundRaised },
            { new: true }
        );
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found.' });
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: 'Error updating project.', error });
    }
});

// Delete a project
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid project ID.' });
    }

    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found.' });
        }
        res.status(200).json({ message: 'Project deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting project.', error });
    }
});

export default router;
