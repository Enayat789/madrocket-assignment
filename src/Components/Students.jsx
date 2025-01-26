import React, { useState } from "react";
import { NavLink } from "react-router";

export default function Students() {
  const [showActions, setShowActions] = useState(false);

  const toggleActions = () => setShowActions(!showActions);

  return (
    <div className="bg-gray-100 w-[75vw] h-full flex flex-col justify-start items-center p-6">
      {/* Header Section */}
      <div className="w-full flex flex-row justify-between items-center bg-gray-400 p-4 rounded-lg shadow-lg mb-6">
        <h2 className="font-bold text-2xl text-white">Users</h2>
        <NavLink to={"/studentForm"}>
          <button className="font-bold text-lg bg-blue-400 p-3 text-white rounded-2xl px-6 cursor-pointer hover:bg-blue-600 transition duration-300">
            + Add Student
          </button>
        </NavLink>
      </div>

      {/* Table Section */}
      <div className="bg-white w-full h-full flex flex-col items-center rounded-lg shadow-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-gray-400 text-white">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Class</th>
              <th className="p-3 text-left">Section</th>
              <th className="p-3 text-left">Roll Number</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            <tr className="hover:bg-gray-200">
              <td className="p-3">1</td>
              <td className="p-3">John Doe</td>
              <td className="p-3">10</td>
              <td className="p-3">A</td>
              <td className="p-3">12</td>
              <td className="p-3">
                {/* Three Dots Menu */}
                <div className="relative">
                  <button
                    onClick={toggleActions}
                    className="text-gray-600 hover:border-gray-400 border-2 border-transparent rounded-full p-2 hover:bg-gray-100 transition duration-200"
                  >
                    <img
                      src="/threeDot-icon.png"
                      alt="three-dot-icon"
                      className="max-w-6"
                    />
                  </button>

                  {showActions && (
                    <ul className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-40">
                      <li className="p-2 hover:bg-gray-200 cursor-pointer">
                        Edit
                      </li>
                      <li className="p-2 hover:bg-gray-200 cursor-pointer">
                        View
                      </li>
                      <li className="p-2 hover:bg-gray-200 cursor-pointer">
                        Delete
                      </li>
                    </ul>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
