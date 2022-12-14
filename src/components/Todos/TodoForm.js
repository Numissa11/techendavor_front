import axios from 'axios';
import React, { useState } from 'react';
import Todos from '.';


function TodoForm({ todos, setTodos }) {

    const initialState = {
        id: "",
        message: ''
    }

    const [todo, setTodo] = useState(initialState)

    const handleChange = e => {
        setTodo({ 
            id: Date.now(),
            message: e.target.value 
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTodos([todo, ...todos])

        axios.post(`http://localhost:8888/todos/`, todo)
        .then(res => {
           console.log('res', res);
        })
        .catch(err => {
           console.log('err', err);
        })

        setTodo(initialState)
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