import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookForm from "./pages/BookForm";

function App() {
  const router = createBrowserRouter([{
     path: "/", element: <Home />
     },
     {
      path: "/books",
      element: <Books/>
     },
     {
      path: "/forms",
      element: <BookForm/>
     }
    ]);
  return <RouterProvider router={router} />;
}

export default App;
