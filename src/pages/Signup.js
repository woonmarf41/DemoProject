import { Form } from "react-bootstrap";
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center text-light mb-5">CREATE AN ACCOUNT</h1>

      <Card className="p-5 m-auto" style={{ maxWidth: 600 }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name here" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email or Username</Form.Label>
            <Form.Control type="text" placeholder="Enter email or username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Button variant="outlined" color="primary" type="submit">
            Submit
          </Button>

          <Link
            to={"/login"}
            style={{ textDecoration: "none" }}
            className="ps-4"
          >
            back to Login
          </Link>
        </Form>
      </Card>
    </div>
  );
};

export default SignupPage;
