import React from 'react';


function Todo(props) {
    return ( 
        <div>
            {props.todo.message}
        </div>
     );
}

export default Todo;