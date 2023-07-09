import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BackgroundFlags } from "./components/Background.tsx";
import { Levels } from "./components/Levels.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/levels",
    element: <Levels />,
  },
  {
    path: "/quiz",
    element: <h1>Quiz</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className=" bg-secondary min-h-screen">
      <BackgroundFlags />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
