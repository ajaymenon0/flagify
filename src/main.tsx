import React from "react";
import ReactDOM from "react-dom/client";
import { Start, Levels, Quiz } from "./pages";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { BackgroundFlags } from "./components/Background.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/levels",
    element: <Levels />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/quiz/:level",
    element: <Quiz />,
    errorElement: <ErrorBoundary />,
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

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang! Check ze console!</div>;
}
