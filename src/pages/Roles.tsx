import React, { useEffect, useState } from "react";
import Tree, { TreeNodeData } from "../component/Tree";
import axios from "axios";
import { TbListTree, TbPlus } from "react-icons/tb";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Roles = () => {
  const [roles, setRoles] = useState<TreeNodeData>();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/role/hierarchy")
      .then(({ data }) => {
        setRoles(data);
      })
      .catch(() => {
        toast.error("Failed to fetch role hierarchy");
      });
  }, []);

  if (!roles) return <div>Loading</div>;
  return (
    <div className="flex flex-col mt-4 ml-20 h-[60vh]">
      <header className="py-4 px-3 h-20 bg-white text-2xl font-bold mb-10 gap-x-4 flex items-center justify-between">
        <span className="flex items-center gap-x-4">
          <TbListTree size={30} /> List of Roles in Perago systems
        </span>
        <TbPlus
          onClick={() => navigate("/new-role")}
          className="cursor-pointer hover:text-blue-500"
        />
      </header>
      <div className="ml-10">
        {roles ? (
          <Tree data={roles as TreeNodeData} />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <h2>There are no roles registered</h2>
            <button
              className="px-3 py1.5 bg-green-500 border text-white"
              onClick={() => navigate("/new-role")}
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roles;
