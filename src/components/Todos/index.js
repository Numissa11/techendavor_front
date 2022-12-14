import React from 'react';
import Todo from '../Todo';
import TodoForm from '../TodoForm';


function Todos() {
    return ( 
        <div>
            <TodoForm />
            <TodoList />
        </div>
     );
}

export default Todos;