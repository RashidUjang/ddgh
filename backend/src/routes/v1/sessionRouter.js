import express from 'express'
const router = express.Router()
import { createAndFetchSession, getSession } from '../../controllers/v1/sessionController.js'

// V1 Routes
router.post('/', createAndFetchSession)
router.get('/', getSession)


export default router