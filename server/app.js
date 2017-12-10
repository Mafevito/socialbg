import express from 'express'
import bodyParser from 'body-parser'
// importamos como un obj
import { question } from './routes'
const app = express();

// podremos leer todo lo que venga con fromato json del cliente y el otro para utf8
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

// preguntamos si estamos en un entorno de desarrollo
if(process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-Width, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS')
    next()
  })
}

app.use('/api/questions', question)

export default app
