import axios from "axios";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

const Books = () => {
  const [loading, setLoading] = useState(false);
const [books, setBooks]= useState([])

  // fetch API from Get
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://library-api-k879.onrender.com/books"
      );
      console.log(res.data.data);
      setBooks(res.data.data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <NavBar />
      <ProductCard />

      {/* Tenary operator-conditional rendering */}
      {/* {loading ? <p>Loading...</p> : <h2>Data is ready</h2>} */}
    </div>
  );
};

export default Books;
