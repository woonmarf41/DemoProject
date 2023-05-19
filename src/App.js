import "./App.css";

import { useRoutes } from "react-router-dom";
import { routes } from "./hooks/useRoutes";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { isLoggedIn } = useAuth();

  // Hooks
  const router = useRoutes(routes(isLoggedIn));

  return (
    <div className="App">
      <div className="container">{router}</div>
    </div>
  );
}

export default App;
