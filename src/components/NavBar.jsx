import { Link } from "react-router";

const NavBar = () => {
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
      <button className="bg-amber-950 rounded-[10px] cursor-pointer pt-[10px] pb-[10px] px-[20px] pl-[20px] text-white">
        <Link to="/forms"> Add Book</Link>
      </button>
    </nav>
  );
};

export default NavBar;
