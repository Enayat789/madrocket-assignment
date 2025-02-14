import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { NavLink, useNavigate } from "react-router";
import closeEyeIcon from "../assets/closeEyeicon.png";
import openEyeIcon from "../assets/openEyeicon.jpg";

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@123.com");
  const [password, setPassword] = useState("admin@123");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (user) {
        navigate("/students");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="w-[100vw] h-full flex justify-center">
      <div className="bg-gray-200 w-full sm:w-[65%] lg:w-[30%] h-auto m-auto flex flex-col justify-between items-center px-6 gap-4 py-4 rounded-lg">
        <div className=" w-full flex flex-col items-center justify-center gap-1 ">
          <h2 className="text-3xl">Sign up</h2>
          <p>
            Already have an account?
            <NavLink to="/login">
              <span className="text-blue-500 hover:underline">Sign in</span>
            </NavLink>
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" w-full p-4 border-2 border-gray-400 rounded-lg outline-none"
          />

          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" w-full p-4 border-2 border-gray-400 rounded-lg outline-none"
          />

          <div className="w-full flex items-center gap-2 border-2 border-gray-400 rounded-lg">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 outline-none"
            />
            <button
              className="size-12"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label="Toggle Password Visibility"
            >
              <img
                src={showPassword ? closeEyeIcon : openEyeIcon}
                alt={showPassword ? "Hide Password" : "Show Password"}
              />
            </button>
          </div>

          <button
            className=" w-full p-4 text-xl bg-black text-white"
            onClick={signIn}
          >
            Sign up
          </button>
        </div>
        <div className="flex flex-row w-full justify-center items-center gap-2">
          <hr className=" border-gray-400 border-dotted w-full" />
          <span>OR</span>
          <hr className=" border-gray-400 border-dotted w-full" />
        </div>

        <div className="flex flex-row gap-6 w-full items-center justify-center h-auto">
          <img
            src="/google-logo.png"
            alt="Google icon"
            className="w-10 h-10 object-contain rounded-full cursor-pointer"
          />
          <img
            src="/github-logo.png"
            alt="GitHub logo"
            className="w-10 h-10 object-contain rounded-full cursor-pointer"
          />
          <img
            src="/twitter-logo.png"
            alt="twitter logo"
            className="w-10 h-10 object-contain rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
