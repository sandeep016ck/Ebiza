
import projectModel from '../models/projectModel'

const createProject = async (req, res) => {
    const { creatorId, projectHed, projectDes, projectPic, fundtobeRaised } = req.body;

    if (!creatorId || !projectHed || !projectDes || !projectPic || !fundtobeRaised) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const project = new Project({
            creatorId,
            projectHed,
            projectDes,
            projectPic,
            fundtobeRaised
        });
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(500).json({ message: 'Error creating project.', error });
    }
}


const getProject = async (req, res) => {
    try {
        const projects = await projectModel.find().populate('creatorId investors', 'name email');
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects.', error });
    }
}

const getProjectbyId = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid project ID.' });
    }

    try {
        const project = await Project.findById(id).populate('creatorId investors', 'name email');
        if (!project) {
            return res.status(404).json({ message: 'Project not found.' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching project.', error });
    }
}






export {
    getProject,
    createProject,
    getProjectbyId
}