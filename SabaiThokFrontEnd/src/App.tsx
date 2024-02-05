import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login.tsx";
import Registration from "./Pages/Registratioin.tsx";

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
]);
function App() {
  return <>
      <RouterProvider router={router}></RouterProvider>
  </>;
}

export default App;
