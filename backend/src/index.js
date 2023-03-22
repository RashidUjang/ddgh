import express from 'express';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import roomRouter from './routes/v1/roomRouter.js'

dotenv.config()
const app = express()

app.use(roomRouter)

app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Listening on port ${process.env.BACKEND_PORT}.`)
})