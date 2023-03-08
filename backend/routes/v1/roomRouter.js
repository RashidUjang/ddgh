import express from 'express'
const router = express.Router()
import { getCurrentRoom } from '../../controllers/v1/roomController.js'

router.get('/room/:id', getCurrentRoom)

export default router