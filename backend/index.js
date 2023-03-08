import express from 'express';
const app = express()
import roomRouter from './routes/v1/roomRouter.js'

const port = 3000;

app.use(roomRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})