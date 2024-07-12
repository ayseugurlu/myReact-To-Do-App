import React, { useState } from "react";
import { Container, Form, InputGroup, ListGroup } from "react-bootstrap";

import ToDoList from "./ToDoList";

const ToDoContainer = () => {
    const [deger,SetDeger]=useState([])

    console.log(deger);
   
  return (
    <Container>
      <InputGroup className="mb-3">
        <Form.Control  onChange={(e)=>SetDeger(e)} className="p-3" placeholder="Add a new task... " />
        <InputGroup.Text
          className="w-25  bg-success text-light justify-content-center"
          role="button"
          id="add-button"
          
          
        >
          ADD
        </InputGroup.Text>
      </InputGroup>

      <Container> 
      <h3 className="text-center mt-5 mb-3">My To-Do List</h3>

      <ToDoList/>


      </Container>
    </Container>
  );
};

export default ToDoContainer;
