import express from 'express'
const router = express.Router()
import { getCurrentRoom } from '../../controllers/v1/roomController.js'

// V1 Routes
router.get('/v1/room/:id', getCurrentRoom)

export default router