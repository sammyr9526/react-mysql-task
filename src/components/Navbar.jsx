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
          <span className=" ">Xasdasdas</span>
        ) : (
          <span className=" ">some</span>
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
