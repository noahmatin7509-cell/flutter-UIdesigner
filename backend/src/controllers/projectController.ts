const projectController = {
  getAllProjects: (req: any, res: any) => {
    res.json({
      data: [
        {
          id: 'project-1',
          name: 'Sample Project',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
    })
  },

  getProject: (req: any, res: any) => {
    const { id } = req.params
    res.json({
      id,
      name: 'Sample Project',
      widgets: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
  },

  createProject: (req: any, res: any) => {
    const { name } = req.body
    res.status(201).json({
      id: `project-${Date.now()}`,
      name,
      widgets: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
  },

  updateProject: (req: any, res: any) => {
    const { id } = req.params
    const { name, widgets } = req.body
    res.json({
      id,
      name,
      widgets,
      updatedAt: new Date().toISOString(),
    })
  },

  deleteProject: (req: any, res: any) => {
    const { id } = req.params
    res.json({ message: `Project ${id} deleted` })
  },
}

export default projectController