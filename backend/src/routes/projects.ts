import { Router, Request, Response } from 'express'
import projectController from '../controllers/projectController'

const router = Router()

router.get('/', projectController.getAllProjects)
router.get('/:id', projectController.getProject)
router.post('/', projectController.createProject)
router.put('/:id', projectController.updateProject)
router.delete('/:id', projectController.deleteProject)

export default router