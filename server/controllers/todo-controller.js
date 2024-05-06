// import Todo from '../modals/ToDoModel.js';


// export const addTodo = async (request, response) => {
//     try {
//         const newTodo = await Todo.create({
//             data: request.body.data,
//             createdAt: Date.now()
//         })

//         await newTodo.save();
//         return response.status(200).json(newTodo);
//     } catch (error) {
//         return response.status(500).json(error.message);
//     }
// }
// export const getAllTodos = async (request, response) => {
//     try {
//         const todos = await Todo.find({}).sort({ 'createdAt': -1 })

//         return response.status(200).json(todos);
//     } catch (error) {
//         return response.status(500).json(error.message);
//     }
// }

// export const toggleTodoDone = async (request, response) => {
//     try {
//         const todoRef = await Todo.findById(request.params.id);

//         const todo = await todo.findOneAndUpdate(
//             { _id: request.params.id },
//             { done: !todoRef.done }
//         )

//         await todo.save();

//         return response.status(200).json(todo);
//     } catch (error) {
//         return response.status(500).json(error.message);
//     }
// }

// export const updateTodo = async (request, response) => {
//     try {
//         await Todo.findOneAndUpdate(
//             { _id: request.params.id },
//             { data: request.body.data }
//         )

//         const todo = await Todo.findById(request.params.id);

//         return response.status(200).json(todo);
//     } catch (error) {
//         return response.status(500).json(error.message);
//     }
// }

// export const deleteTodo = async (request, response) => {
//     try {
//         const todo = await Todo.findByIdAndDelete(request.params.id)

//         return response.status(200).json(todo);
//     } catch (error) {
//         return response.status(500).json(error.message);
//     }
// }

 import Todo from '../modals/ToDoModel.js';

module.exports.getToDos = async (req, res) => {
  const toDos = await ToDoModel.find();
  res.send(toDos);
};

module.exports.saveToDo = (req, res) => {
  const { toDo } = req.body;

  ToDoModel.create({ toDo })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateToDo = (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;

  ToDoModel.findByIdAndUpdate(id, { toDo })
    .then(() => {
      res.send("Updated Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.deleteToDo = (req, res) => {
  const { id } = req.params;

  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};