


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
