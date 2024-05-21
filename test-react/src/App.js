import {useEffect, useState} from 'react';
import './App.css'
import axios from 'axios';
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";

const API_URL = "http://127.0.0.1:8000/api/todo/"


function App() {
    const [todos, setTodos] = useState([])
    const getToDos = async () => {
        const response = await axios.get(API_URL)
        const todos = response.data
        const sorted_todos = todos.sort((a, b) => b.id - a.id);
        setTodos(sorted_todos)
    }

    useEffect(() => {
        getToDos()
    }, [])

    const createToDo = (newTodo) => {


        axios.post(API_URL, newTodo)
            .then(response => {
                newTodo = response.data;

                setTodos([newTodo, ...todos])

            })
            .catch(error => {
                console.log(error);
            });
    }

    const removeToDo = (todo) => {
        setTodos(todos.filter(t => t.id !== todo.id))
        axios.delete(API_URL + todo.id.toString() + '/')
    }

    const editDone = (todo, done) => {
        const allWithoutMentioned = todos.filter(t => t.id !== todo.id)
        todo.done = done //true
        setTodos([...allWithoutMentioned, todo].sort((todo1, todo2) => {
            return todo2.id - todo1.id
        }))
        axios.put(API_URL + todo.id.toString() + '/', todo)
    }

    return (
        <div className='app'>
            <AddToDo createToDo={createToDo} getToDos={getToDos}></AddToDo>
            <ToDoList todos={todos} removeToDo={removeToDo} editDone={editDone}/>
        </div>
    );
}


export default App;
