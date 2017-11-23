import express from 'express'

const app = express.Router()

const question = {
  _id: 1,
  title: '¿lol?',
  description: 'mi ques',
  createdAt: new Date(),
  icon: 'none',
  answers:[],
  user: {
    firstName: 'Lola',
    lastName: 'Lopez',
    email: 'lola@gmail.com',
    password: '123'
  }
}

const questions= new Array(10).fill(question)

//cuando el front acceda a esa ruta de las preguntas(api/questions)
app.get('/', (req,res) => res.status(200).json(questions))
//cuando acceca especificamente a una sola pregunta(api/question/id)
app.get('/:id', (req,res) => res.status(200).json(question))

export default app


//Podemos definir rutas y exportar
