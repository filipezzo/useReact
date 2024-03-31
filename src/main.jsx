import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import "./index.css";
import { BlogPage } from "./pages/blog/BlogPage";
import { ErrorPage } from "./pages/ErrorPage";
import { DetailsPage } from "./pages/details/DetailsPage";
import { ThemeProvider } from "./contexts/theme";
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
