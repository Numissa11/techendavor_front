import React, { useState } from 'react';
import Todos from '.';


function TodoForm({ todos, setTodos }) {

    const [todo, setTodo] = useState({
        id: "",
        message: ''
    })

    const handleChange = e => {
        setTodo({ 
            id: Date.now(),
            message: e.target.value 
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTodos([todo, ...todos])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="todo"
                value={todo.message}
                placeholder='Enter your Todo item sweety'
                onChange={handleChange}
            />
            <button type='submit'>Add Todo</button>
        </form>
    );
}

export default TodoForm;