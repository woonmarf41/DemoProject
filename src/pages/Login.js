import { Form, Button } from "react-bootstrap";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="mt-5 ">
      <h1 className="text-center mb-5 text-light">LOGIN</h1>

      <Card className="p-5 m-auto" style={{ maxWidth: 600 }}>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email or Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email or username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button ariant="primary" type="submit">
            Login
          </Button>

          <Link
            to={"/signup"}
            style={{ textDecoration: "none" }}
            className="ps-4"
          >
            or Create new account
          </Link>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
