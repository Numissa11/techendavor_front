import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import axios from 'axios';


export default function Todos() {
   const [todoList, setTodoList] = useState([])

   useEffect(() => {
      axios.get('http://localhost:8888/todos', {})
         .then(res => {
            console.log('ressss', res);
            setTodoList(res.data)
         })
         .catch(err => {
            console.log('err', err);
         })
   }, [])

   const deleteHandler = id => {
      axios.delete(`http://localhost:8888/todos/${id}`)
         .then(res => {
            console.log('res', res);
            const newTodos = todoList.filter(item => {
               return item.id !== id
            })
            setTodoList(newTodos)
         })
         .catch(err => {
            console.log('err', err);
         })
   }

   const updateHandler = todo => {


      axios.put(`http://localhost:8888/todos/${todo.id}`, todo)
         .then(res => {
            console.log('res', res);
            setTodoList(todoList.map(item => {
               if (item.id === todo.id) {
                  return {
                     ...item,
                     message: todo.message
                  }
               } else {
                  return item
               }
            }))
         })
         .catch(err => {
            console.log('err', err);
         })
   }

   return (
      <div>
         <TodoForm todos={todoList} setTodos={setTodoList} />
         <TodoList todos={todoList} deleteHandler={deleteHandler} updateHandler={updateHandler} />
      </div>
   )
}