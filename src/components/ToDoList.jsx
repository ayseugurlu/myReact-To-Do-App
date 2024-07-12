import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";

const ToDoList = () => {
  return (
    <Container>
      <ListGroup as="ul">
        <ListGroup.Item
          as="li"
          className="bg-success-subtle d-flex justify-content-between"
        >
          kod yaz <RiDeleteBinLine className="text-danger fs-3" />
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default ToDoList;
