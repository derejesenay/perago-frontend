import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`bg-cyan-700 text-white w-64 min-h-screen ${
        isSidebarOpen ? "sidebar-open" : ""
      }`}
    >
      <div className="py-4 px-6">
        <div className="menu-icon" onClick={toggleSidebar}>
          ☰ Menu
        </div>
        {isSidebarOpen && (
          <nav>
            <ul className="space-y-2 mt-6">
              <li>
                <a
                  href="/new-role"
                  className="block py-2 px-4 hover:bg-blue-500 transition duration-200"
                >
                  Add Role
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-4 hover:bg-blue-500 transition duration-200"
                >
                  List of Roles
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
