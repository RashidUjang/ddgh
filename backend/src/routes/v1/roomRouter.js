import express from 'express'
const router = express.Router()
import { createAndFetchRoom, getRoom } from '../../controllers/v1/roomController.js'

// V1 Routes
router.get('/v1/room/:id', getRoom)
router.post('/v1/room', createAndFetchRoom)


export default router