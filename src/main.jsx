//import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./components/NotFound.jsx";
import Restorant from "./components/Restorant/Restorant.jsx";
import Home from "./components/Home/Home.jsx";
import RestorantMenu from "./components/Restorant/RestorantMenu.jsx";
import SecondaryHome from "./components/Restorant/SecondaryHome.jsx";
import { store } from "./Store/store.js";
import { Provider } from "react-redux";
import CheckOut from "./components/Restorant/CheckOut.jsx";
const ways = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <SecondaryHome />,
        children: [
          { path: "restorant", element: <Restorant /> },
          { path: "city/rohtak/:id", element: <RestorantMenu /> },
        ],
      },
      {path:'checkout', element:<CheckOut/>}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={ways}>{/* <App /> */}</RouterProvider>
  </Provider>
  //</StrictMode>
);
