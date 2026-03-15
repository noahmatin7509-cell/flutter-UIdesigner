import { Router, Request, Response } from 'express'
import widgetController from '../controllers/widgetController'

const router = Router()

router.get('/templates/basic', widgetController.getBasicWidgets)
router.get('/templates/layout', widgetController.getLayoutWidgets)
router.get('/templates/advanced', widgetController.getAdvancedWidgets)

export default router