import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    toDo: {
        type: String,
        required: true,
      },
    });


const todo = mongoose.model('todo', TodoSchema);

export default todo;