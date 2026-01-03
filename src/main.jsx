//import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./components/NotFound.jsx";
import Restorant from "./components/Restorant/Restorant.jsx";
import Home from "./components/Home/Home.jsx";
import RestorantMenu from "./components/Restorant/RestorantMenu.jsx";
const ways = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children:[
      {index:true, element:<Home/>},
      {path:"restorant",element:<Restorant/>},
      {path:"city/rohtak/:id", element:<RestorantMenu/>}
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={ways}>
    {/* <App /> */}
  </RouterProvider>
  //</StrictMode>
);
