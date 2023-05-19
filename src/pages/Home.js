import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const Homepage = () => {
  const [todos, setTodos] = useState([]);
  const [task, setNewTask] = useState("");

  const { data } = useAuth();
  const user = data.user;

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${user._id}/create_todo`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ task }),
        }
      );
      console.log(response);
      setNewTask("");
    } catch (error) {
      console.log("Server error");
    }
  };

  useEffect(() => {
    const getTodo = async () => {
      const response = await fetch(
        `http://localhost:3001/users/${user._id}/todo`,
        { method: "GET" }
      );
      const todo = await response.json();
      setTodos(todo);
    };
    getTodo();
    console.log("useEffect ran");
    return () => {
      console.log("clean up");
    };
  }, [user._id]);

  return (
    <div>
      <h1 className="text-center text-light">To Do Lists</h1>
      <Form
        onSubmit={handleSubmit}
        className="m-auto d-flex "
        style={{ maxWidth: 500 }}
      >
        <Form.Control
          className="me-2"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>

      <div>{todos && todos.map((todo) => <li>{todo.task}</li>)}</div>
    </div>
  );
};

export default Homepage;
