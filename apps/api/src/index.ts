import express from 'express'
import cors from 'cors'
import todoRouter from './routes/todo'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import dotenvExpand from 'dotenv-expand'

dotenv.config()
const env = dotenv.config()
dotenvExpand.expand(env)
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))
const app = express()
app.use(cors())
app.use(express.json())
app.use('/todos', todoRouter)
app.get('/ping', (_, res) => res.send('pong'))
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') ?? true,
  credentials: true
}))
// ★ 新增：真正监听端口
const PORT = process.env.PORT ?? 3001
app.listen(PORT, () => {
  console.log(`API ready on http://localhost:${PORT}`)
})
console.log('✅ CORS_ORIGIN:', process.env.CORS_ORIGIN)
