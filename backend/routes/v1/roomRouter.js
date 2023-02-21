const express = require('express')
const router = express.Router
import roomController from '../../controllers/v1/roomController'

router.get('/room/:id', roomController.getCurrentRoom)

export default router