import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="bg-zinc-600 flex justify-between items-center">
      <div className="p-3 text-lg">React Mysql</div>
      <ul className=" hidden md:flex md:flex-row justify-items-end flex-col">
        <li className="ml-2 mr-2 text-lg p-3 hover:bg-zinc-500 after:bg-zinc-800">
          <Link to="/about">About</Link>
        </li>

        <li className="ml-2 mr-2 text-lg p-3 hover:bg-zinc-500 after:bg-zinc-800">
          <Link to="/">Home</Link>
        </li>

        <li className="ml-2 mr-2 text-lg p-3 hover:bg-zinc-500 after:bg-zinc-800">
          <Link to="/new">Create task</Link>
        </li>
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 md:hidden"
        onClick={() => setNavbar(!navbar)}
      >
        {navbar ? (
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-8 text-slate-50"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
          </svg>
        ) : (
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-7 text-slate-50"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
            ></path>
          </svg>
        )}
      </div>
      {navbar && (
        <ul className="flex flex-col justify-center items-center absolute top-0  left-0 w-full h-screen bg-zinc-600">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:bg-zinc-500 after:bg-zinc-800">
            <Link to="/about">About</Link>
          </li>

          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:bg-zinc-500 after:bg-zinc-800">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:bg-zinc-500 after:bg-zinc-800">
            <Link to="/new">Create task</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
