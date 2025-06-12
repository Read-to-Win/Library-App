import { Link } from "react-router";
import Modal from "./Modal";
import Form from "./Form";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <nav className="flex flex-row justify-between items-center rounded-[10px] border-black p-4 border-none text-[#014d31]">
      <span>
        <h2>ReadTo_WIN
          </h2>
        </span>
      <ul className="flex flex-row gap-x-[40px]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>Contact</li>
      </ul>
      <span className="flex items-center gap-2">
  
        <input
          type="text"
          placeholder="Search"
          className="rounded-[20px] cursor-pointer p-[5px] border-[1px] text-[#014d31]"
      
        /> <FaSearch className="ml-[-40px] text-[#014d31]"/>
      </span>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="bg-[#014d31] rounded-[10px] cursor-pointer pt-[10px] pb-[10px] px-[20px] pl-[20px] text-white"
      >
        {/* <Link to="/form"> Add Book</Link> */}
        Add Book
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        title="Add Book"
      >
        <Form />
      </Modal>
    </nav>
  );
};

export default NavBar;
