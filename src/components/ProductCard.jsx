import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Modal from "./Modal";
import Form from "./Form";
import Edit from "./Edit";
import { useState } from "react";

const ProductCard = () => {
  const books = [
    {
      imageUrl: "https://picsum.photos/id/1005/200/300",
      title: "The Silent Forest",
      author: "Ava Thompson",
      price: "$5.00",
      id: 1,
    },
    {
      imageUrl: "https://picsum.photos/id/1015/200/300",
      title: "Echoes of the Past",
      author: "James Carter",
      price: "$5.00",
      id: 2,
    },
    {
      imageUrl: "https://picsum.photos/id/1025/200/300",
      title: "Beneath the Crimson Sky",
      author: "Isla Grant",
      price: "$5.00",
      id: 3,
    },
  ];
  const navigate = useNavigate();

  const handleClick = (id) => {
    const book = books.find((book) => book.id === id);
    navigate("/bookdetail", { state: book });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleEdit = (id) => {
    setIsModalOpen(false);
    setSelectedBook(null);
    const book = books.find((book) => book.id === id);
    setSelectedBook(book);
    setIsModalOpen(true);
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {books.map((book, index) => (
        <div
          key={index}
          className="bg-[#ccfcc171] rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.1)] p-4 text-center cursor-pointer hover:shadow-[0_0_0_1px_rgba(7,56,1,0.2)]"
        >
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-auto rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-sm text-gray-600">{book.author}</p>
          <p className="text-sm text-[#014d31] font-bold">{book.price}</p>
          <div className="flex justify-center gap-8 mt-3 text-gray-700">
            <MdOutlineRemoveRedEye
              className="cursor-pointer text-3xl hover:text-blue-500 hover:scale-125 transition-transform duration-200"
              onClick={() => handleClick(book.id)}
            />
            <FaEdit
              className="cursor-pointer text-3xl hover:text-green-500 hover:scale-125 transition-transform duration-200"
              onClick={() => handleEdit(book.id)}
            />
            <MdDelete className="cursor-pointer text-3xl hover:text-red-500 hover:scale-125 transition-transform duration-200" />
          </div>
        </div>
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        title="Edit book"
        book={selectedBook}
      >
        <Edit book={selectedBook} />
      </Modal>
    </div>
  );
};

export default ProductCard;
