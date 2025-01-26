import React from "react";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { NavLink } from "react-router";

export default function Sidebar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const onLogout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error during logout: ", error);
      });
  };

  return (
    <aside className="h-screen w-[25vw] bg-white shadow-md border-r">
      <nav className="h-full flex flex-col">
        {/* Header */}
        <div className="p-4 px-6 pb-2 flex justify-between items-center">
          <img src="/logoipsum-332.svg" alt="Company Logo" className="w-28" />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col p-4 w-full h-full gap-4">
          <li>
            <NavLink to={"/"}>
              <button className="text-gray-700 p-4 w-[90%] bg-gray-100 hover:bg-gray-200 flex justify-start items-center">
                Dashboard
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/students"}>
              <button className="text-gray-700 p-4 w-[90%] bg-gray-100 hover:bg-gray-200 flex justify-start items-center">
                Students Page
              </button>
            </NavLink>
          </li>
          {/* <li>
            <button
              className="text-gray-700 p-4 w-[90%] bg-gray-100 hover:bg-gray-200 flex justify-start items-center"
              onClick={() => onNavigate("/login")}
            >
              signIn / signUp
            </button>
          </li> */}
        </ul>

        {/* Logout Button */}
        {user ? (
          <div className="p-4">
            <NavLink to={"login"}>
              <button
                className="w-[90%] p-3 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={onLogout}
              >
                Logout
              </button>
            </NavLink>
          </div>
        ) : (
          <div className="w-[90%] p-3">
            <NavLink to={"/login"}>
              <button className="text-gray-700 p-4 w-full bg-gray-300 hover:bg-gray-200 flex justify-center items-center">
                signIn / signUp
              </button>
            </NavLink>
          </div>
        )}
      </nav>
    </aside>
  );
}
