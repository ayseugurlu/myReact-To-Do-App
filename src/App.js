import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoContainer from "./components/ToDoContainer";
import { useState } from "react";
import ToDoList from "./components/ToDoList";


function App() {

  const [todo,setTodo]=useState(JSON.parse(localStorage.getItem("todoList")) || [])

  return (
    <>
      <Header/>
      <ToDoContainer todo={todo} setTodo={setTodo}/>
      <ToDoList todo={todo} setTodo={setTodo}/>
    
    </>
  );
}

export default App;
