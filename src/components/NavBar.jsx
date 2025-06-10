import { Link } from "react-router";
import Modal from "./Modal";
import Form from "./Form";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <nav className="flex flex-row justify-between items-center rounded-[20px] border-black p-4 boreder-none ">
      <span>LOGO</span>
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
      <input
        type="text"
        placeholder="Search"
        className="rounded-[20px] cursor-pointer p-[5px] border-[1px]"
      />
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="bg-amber-950 rounded-[10px] cursor-pointer pt-[10px] pb-[10px] px-[20px] pl-[20px] text-white"
      >
        {/* <Link to="/form"> Add Book</Link> */}
        Add Book
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        title="Add Product"
      >
        <Form />
      </Modal>
    </nav>
  );
};

export default NavBar;
