import React from "react";
import Sidebar from "../Sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex h-full w-full relative">
      <Sidebar />
      <div className="flex flex-col w-full relative">
        <div
          className="h-16 bg-cyan-900 w-full flex items-center 
          justify-center font-semibold text-3xl text-white z-20"
        >
          Roles Management in Perago
        </div>
        <main className="flex-1 overflow-y-auto relative">
          {children}         
            {" "}
            <img
              src="/new3.png"
              alt="Overlay Logo"
              className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-20 pointer-events-none"
            />         
        </main>
      </div>
    </div>
  );
};

export default Layout;
