import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Politics from "./pages/Politics";
import Food from "./pages/Food";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/business", element: <Business /> },
      { path: "/politics", element: <Politics /> },
      { path: "/sports", element: <Sports /> },
      { path: "/technology", element: <Technology /> },
      { path: "/food", element: <Food /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
