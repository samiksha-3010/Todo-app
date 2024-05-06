// import { useState } from "react";

// import { toggleTodo, updateTodo } from "../redux/actions";
// import { deleteTodo } from "../redux/actions";

// import { useDispatch } from "react-redux";

// const Todo = ({ todo }) => {

//     const [editing, setEditing] = useState(false);
//     const [text, setText] = useState(todo?.data);

//     const dispatch = useDispatch();

//     const onFormSubmit = (e) => {
//         e.preventDefault();

//         setEditing(prevState => !prevState);

//         dispatch(updateTodo(todo._id, text))
//     }

//     return (
//         <li
//             className="task"
//             onClick={() => dispatch(toggleTodo(todo._id))}
//             style={{
//                 textDecoration: todo?.done ? 'line-through' : '',
//                 color: todo?.done ? '#bdc3c7' : '#34495e'
//             }}
//             data-testid="todo-test"
//         >
//             <span style={{ display: editing ? 'none' : '' }}>{todo?.data}</span>

//             <form
//                 style={{ display: editing ? 'inline' : 'none' }}
//                 onSubmit={onFormSubmit}
//             >
//                 <input
//                     type="text"
//                     value={text}
//                     className="edit-todo"
//                     onChange={(e) => setText(e.target.value)}
//                 />
//             </form>

//             <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
//                 <i className="fas fa-trash" />
//             </span>
//             <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
//                 <i className="fas fa-pen" />
//             </span>
//         </li>
//     )
// }

// export default Todo;


import React, { useState } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');

    const handleInputChange = (event) => {
        setTodoText(event.target.value);
    };

    const handleAddTodo = () => {
        if (todoText.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
            setTodoText('');
        }
    };

    const handleToggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <input
                type="text"
                value={todoText}
                onChange={handleInputChange}
                placeholder="Add new item"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(todo.id)}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
