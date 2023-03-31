import express from 'express'
const router = express.Router()
import { createAndFetchRoom, getRoom } from '../../controllers/v1/roomController.js'

// V1 Routes
router.post('/', createAndFetchRoom)
router.get('/:id', getRoom)

export default router