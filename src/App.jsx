import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookForm from "./pages/BookForm";
import BookDetails from "./pages/BookDetails";
import About from "./components/About";
import Footer from "./components/Footer";
import Edit from "./components/Edit";

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
      path:"/bookdetail/:id",
      element: <BookDetails/>
     },
     {
      path:"/about",
      element:<About/>
     },
     {
      path:"/contact",
      element:<Footer/>
     },

     {
      path:"/edit/:id",
      element:<Edit/>
     }


    ]);
  return <RouterProvider router={router} />;
}

export default App;
