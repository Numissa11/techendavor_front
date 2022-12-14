import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function Todos() {
    return ( 
        <div>
           <TodoForm />
           <TodoList />
        </div>
     );
}

export default Todos;