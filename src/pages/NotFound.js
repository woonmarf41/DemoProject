import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404 Page Not Found!</h1>
      <Link to="/">back to home</Link>
    </>
  );
};

export default NotFound;
