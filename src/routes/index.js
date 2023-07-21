import Layout from "../layout";
import Home from "../pages/Home";

export const Router = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
];
