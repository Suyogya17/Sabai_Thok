import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login.tsx";
import Registration from "./Pages/Registratioin.tsx";
import About from "./Pages/About.tsx";
import Account from "./Pages/Account.tsx";
import AdminLogin from "./Pages/Admin/AdminLogin.tsx";

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
  {
    path: "/account",
    element: <Account/>,
  },
  {
    path: "/admin-log-in",
    element: <AdminLogin/>,
  },

]);
function App() {
  return <>
      <RouterProvider router={router}></RouterProvider>
  </>;
}

export default App;
