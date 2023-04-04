import express from 'express'
const router = express.Router()
import { createAndJoinRoom, getRoom } from '../../controllers/v1/roomController.js'

// V1 Routes
router.post('/', createAndJoinRoom)
router.get('/:id', getRoom)

export default router