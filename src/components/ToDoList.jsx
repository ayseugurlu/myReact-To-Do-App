import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";

const ToDoList = ({todo,setTodo}) => {

  const deleteTodo=(id)=>{

    localStorage.setItem("todoList", JSON.stringify(todo.filter((i)=> i.id !== id)));

    setTodo(JSON.parse(localStorage.getItem("todoList")))

  }
  
  return (
    <Container>
      <ListGroup as="ul">
      {todo.map((x)=>(
        <ListGroup.Item key={x.id} 
          as="li"
          className={`bg-success-subtle d-flex justify-content-between ${x.isDone? "done" : "gorev"}`}
        >
          {x.text} 
          <div>
          <TiTickOutline 
          onClick={()=> setTodo(todo.map((a)=> a.id ===x.id? {...a, isDone:!a.isDone} :  a))}

          className="text-info mx-1 fs-1"/>
          <RiDeleteBinLine
          onClick={()=>deleteTodo(x.id)} className="text-danger fs-3" />
          </div> 
        </ListGroup.Item>))}
        
      </ListGroup>
    </Container>
  );
};

export default ToDoList;
