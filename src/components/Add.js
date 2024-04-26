import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import Employees from "./Employees"; // Assuming Employees is an array of objects

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    const uniqueId = ids.slice(0, 8);

    const a = name;
    const b = age;

    Employees.push({ id: uniqueId, Name: a, Age: b });

    history("/");
  };

  return (
    <div style={{ margin: "15rem" }}>
      <Form className="d-grid gap-2">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </Form.Group>
        <Button onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
