import express from 'express';
import dotenv from 'dotenv';
import connecDB from './src/configs/connecDB.js';
import authRouter from './src/router/authRouter.js';
import roomRouter from './src/router/roomRouter.js';
import employeeRouter from './src/router/emploeeRouter.js';

dotenv.config()

const app = express()
const PORT = 3001

app.use(express.json())

app.use('/auth', authRouter)
app.use('/room', roomRouter)
app.use('/emploee', employeeRouter)

connecDB().then(() => {
app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(`Server stating at http://localhost:${PORT}`)
})
})