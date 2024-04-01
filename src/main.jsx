import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme";
import "./index.css";
import { ErrorPage } from "./pages/ErrorPage";
import { BlogPage } from "./pages/blog/BlogPage";
import { DetailsPage } from "./pages/details/DetailsPage";
import { HomePage } from "./pages/home/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/blog",
    element: <BlogPage />,
  },

  {
    path: "/blog/post/:id",
    element: <DetailsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
