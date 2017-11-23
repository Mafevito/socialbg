import express from 'express'
// importamos como un obj
import { question } from './routes'
const app = express();

app.use('/api/questions', question)

export default app
