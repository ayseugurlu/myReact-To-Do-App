import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoContainer from "./components/ToDoContainer";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import { Container } from "react-bootstrap";


function App() {

  const [todo,setTodo]=useState(JSON.parse(localStorage.getItem("todoList")) || [])

  return (
    <Container>
      <Header/>
      <ToDoContainer todo={todo} setTodo={setTodo}/>
      <ToDoList todo={todo} setTodo={setTodo}/>
    
    </Container>
  );
}

export default App;
