import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const initialState = [
   { id: 1, message: 'Walk on the other side' },
   { id: 2, message: 'Take out trash' },
   { id: 3, message: 'finish tutorial' }
]

function Todos() {
   const [todoList, setTodoList] = useState(initialState)
   console.log('i de', todoList);

    return ( 
        <div>
           <TodoForm todos={initialState} setTodos={setTodoList}/>
           <TodoList todos={todoList}/>
        </div>
     );
}

export default Todos;