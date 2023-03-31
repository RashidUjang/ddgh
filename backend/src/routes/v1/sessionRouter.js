import express from 'express'
const router = express.Router()
import { createAndFetchSession } from '../../controllers/v1/sessionController.js'

// V1 Routes
router.post('/', createAndFetchSession)

export default router