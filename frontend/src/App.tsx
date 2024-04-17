import { useRoutes } from "react-router-dom";
import useAuthRoutes from "./router";

function App() {
  const routes = useAuthRoutes();
  const content = useRoutes(routes);

  return content;
}

export default App;
