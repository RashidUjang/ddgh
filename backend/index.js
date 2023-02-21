const express = require('express');
const app = express()
import roomRouter from './routes/v1/roomRouter'

const port = 3000;

app.use(roomRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})