import React from "react";

const NavBar = () => {
  return (
    <nav className=" flex flex-row justify-between bg-cyan-600 px-8 py-3 background-blend-mode: screen text-green">
      <img src="/logo.png" alt="Logo" width={300} height={300} />
      <div className="text-opacity-45 p-2 text-5xl font-extrabold text-black-700">
        Perago Information Systems
      </div>
      <img src="/logo.png" alt="Logo" width={300} height={300} />
    </nav>
  );
};

export default NavBar;
