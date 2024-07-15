import React, { useState } from "react";
import { Container, Form, InputGroup, ListGroup } from "react-bootstrap";


const ToDoContainer = ({todo,setTodo}) => {


    const [text,setText]=useState([])

    console.log(text);

    const handleSubmit=(e)=>{
      console.log("clicked")
      e.preventDefault();
      localStorage.setItem("todoList",JSON.stringify([...todo, {id: Date.now(), text:text, isDone:false}]))

      setTodo(JSON.parse(localStorage.getItem("todoList")))

      setText("")
    }
   
  return (
    <Container>

      <InputGroup  className="mb-3">
        <Form.Control  onChange={(e)=>setText(e.target.value)} className="p-3" placeholder="Add a new task... " value={text}/>
        <InputGroup.Text
          className="w-25  bg-success text-light justify-content-center"
          type="submit"
          id="add-button"
          onClick={handleSubmit}

        >
          ADD
        </InputGroup.Text>
      </InputGroup>

      <Container> 
      <h3 className="text-center mt-5 mb-3">My To-Do List</h3>

      


      </Container>
    </Container>
  );
};

export default ToDoContainer;
