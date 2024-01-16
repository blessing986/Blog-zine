import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Business from "./pages/Business";
import LifeStyle from "./pages/LifeStyle";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/business", element: <Business /> },
      { path: "/lifestyle", element: <LifeStyle /> },
      { path: "/sports", element: <Sports /> },
      { path: "/technology", element: <Technology /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
