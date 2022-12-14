import React, {useState} from 'react';


function Todo({todo, deleteHandler}) {

    const [isEditing, setIsEditing] = useState(false)
    const [updatedTodo, setUpdatedTodo] = useState()

    const updateTodoState = () => {
        
    }
    return ( 
        <div>
            {todo.message}
            <button onClick={() =>{ deleteHandler(todo.id) } }>X</button>
            <button onClick={() =>{ updateHandler(todo.id) } }>edit</button>
        </div>
     );
}

export default Todo;