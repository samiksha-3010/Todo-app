import express   from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'



const app = express()
app.use(cors())
app.use(express.json())
dotenv.config();
app.get('/', (req, res) => {
    return res.send("Welcome to you.")
})


import { getCurrentUser, login, register } from './controllers/Auth.controllers.js';
import { addTodo, deleteTodo, getAllTodos, toggleTodoDone, updateTodo } from './controllers/todo-controller.js';

app.post('/register', register );
app.post('/login', login );
app.post('/getcurrentuser ', getCurrentUser );
app.post('/todos', addTodo)
app.get('/todos', getAllTodos);
app.get('/todos/:id', toggleTodoDone);;
app.put('/todos/:id', updateTodo);
app.delete('/todos/:id', deleteTodo);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to DB...")
  })
  
app.listen(7000, () => { console.log("Listening on port 7000.") })