import axios from "axios";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Books = () => {
  const [Loading, setLoading] = useState(false);

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleClick = (id) => {
    const book = books.find((book) => book.id === id);
    navigate("/bookdetail", { state: book });
  };
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://library-api-k879.onrender.com/books/${id}`
      );
      alert(res.data.message);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };
  // fetching the API
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://library-api-k879.onrender.com/books"
      );
      console.log(res.data.data);
      setBooks(res.data.data);
    } catch (error) {
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
      <div>
        <h1 className="text-center font-extrabold mb-8 mt-8 cursor-pointer text-[#014d31]">
          EXPLORE BOOKS
        </h1>
        {Loading ? (
          <p className="w-full flex justify-center">Loading....</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-emerald-100 rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.1)] p-8 text-center cursor-pointer hover:shadow-[0_0_0_1px_rgba(7,56,1,0.2)] hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-auto rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <div className="flex justify-center gap-8 mt-3 text-gray-700">
                  {/* View Icon with Tooltip */}
                  <div className="relative group">
                    <MdOutlineRemoveRedEye
                      className="cursor-pointer text-3xl hover:text-blue-500 hover:scale-125 transition-transform duration-200"
                      //   onClick={() => handleClick(book.id)}
                      onClick={() => navigate(`/bookdetail/${book.id}`)}
                    />
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      View
                    </span>
                  </div>

                  {/* Edit Icon with Tooltip */}
                  <div className="relative group">
                    <FaEdit
                      className="cursor-pointer text-3xl hover:text-green-500 hover:scale-125 transition-transform duration-200"
                        onClick={() => navigate(`/edit/${book.id}`)}
                    />
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      Edit
                    </span>
                  </div>

                  {/* Delete Icon with Tooltip */}
                  <div className="relative group">
                    <MdDelete
                      className="cursor-pointer text-3xl hover:text-red-500 hover:scale-125 transition-transform duration-200"
                      onClick={() => handleDelete(book.id)}
                    />
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* <Modal
                isOpen={isModalOpen}
                onClose={() => {
                  setIsModalOpen(false);
                }}
                title="Edit book"
                book={selectedBook}
              >
                <Edit book={selectedBook} />
              </Modal> */}
          </div>
        )}
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Books;
