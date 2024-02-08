import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login.tsx";
import Registration from "./Pages/Registratioin.tsx";
import About from "./Pages/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/log-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Registration />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  

]);
function App() {
  return <>
      <RouterProvider router={router}></RouterProvider>
  </>;
}

export default App;
