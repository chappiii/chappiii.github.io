import logo from "../Assets/c.png";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { useState } from "react";

function NavBar() {
  let [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-950 shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between  py-4 md:px-24 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-lime-800 mr-1 pt-2">
            <a href={"#/"}>
              <img src={logo} alt="logo" className="w-14" />
            </a>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-lime-600 absolute right-8 top-8 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <ul
          className={`md:flex md:items-center bg-slate-950 mr-5 md:pb-0 mt-2 md:mt-2 pb-12  absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center">
            <a
              onClick={() => setOpen(!open)}
              href={"#/"}
              className="text-lime-600 hover:text-white duration-500 flex items-center gap-2"
            >
              <AiOutlineHome /> <span>Home</span>
            </a>
          </li>

          <li className="md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center">
            <a
              onClick={() => setOpen(!open)}
              href={"#/about"}
              className="text-lime-600 hover:text-white duration-500 flex items-center gap-2"
            >
              <AiOutlineUser /> <span>About</span>
            </a>
          </li>

          <li className="md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center">
            <a
              onClick={() => setOpen(!open)}
              href={"#/project"}
              className="text-lime-600 hover:text-white duration-500 flex items-center gap-2"
            >
              <AiOutlineFundProjectionScreen /> <span>Projects</span>
            </a>
          </li>

          <li className="md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center">
            <a
              onClick={() => setOpen(!open)}
              href={"#/resume"}
              className="text-lime-600 hover:text-white duration-500 flex items-center gap-2"
            >
              <CgFileDocument /> <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
