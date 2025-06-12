import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookForm from "./pages/BookForm";
import BookDetails from "./pages/BookDetails";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([{
     path: "/", element: <Home />
     },
     {
      path: "/books",
      element: <Books/>
     },
     {
      path: "/form",
      element: <BookForm/>
     },
     {
      path:"/bookdetail",
      element: <BookDetails/>
     },
     {
      path:"/about",
      element:<About/>
     },
     {
      path:"/contact",
      element:<Footer/>
     }


    ]);
  return <RouterProvider router={router} />;
}

export default App;
