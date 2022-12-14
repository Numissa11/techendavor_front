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
   
   const deleteHandler = id => 
   {
      const newTodos = todoList.filter(elm => {
         return elm.id !== id
      })
      setTodoList(newTodos)
   }

   const updateHandler = id => 
   {
      const updatedTodo = todoList.map(elm => {
         
      })
   }

    return ( 
        <div>
           <TodoForm todos={initialState} setTodos={setTodoList} />
           <TodoList todos={todoList} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
        </div>
     );
}

export default Todos;