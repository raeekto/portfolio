import { useState } from "react";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faBars,
  faSearch,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [modalVal, setModalVal] = useState(null); // null = no modal open

  const handleLogin = () => {
    console.log("it is login");
    setModalVal("login"); // open login modal
  };

  const handleSignup = () => {
    console.log("it is signup");
    setModalVal("signup"); // open signup modal
  };

  const handleClose = () => {
    setModalVal(null); // close modal
  };

  return (
    <>
      {modalVal === "login" && <Modal type="login" onClose={handleClose} />}
      {modalVal === "signup" && <Modal type="signup" onClose={handleClose} />}
      <header>
        <nav className="w-full h-16 sm:h-20 p-2.5 bg-indigo-200 flex justify-between border-2 border-sky-950 m-1 rounded-md overflow-auto no-scrollbar">
          <ul className="flex space-x-1  sm:space-x-2 lg:space-x-3">
            <li className="anchor-style">
              <FontAwesomeIcon icon={faHouse} className="icons-style" />
              <NavLink className="" to="/">Home</NavLink>
            </li>
            <li className="anchor-style">
              <FontAwesomeIcon icon={faBars} className="icons-style" />
              <NavLink className="" to="/About">About</NavLink>
            </li>
            <li className="anchor-style">
              <FontAwesomeIcon icon={faPhone} className="icons-style" />
              <NavLink className="" to="/Contact">Contact</NavLink>
            </li>
            <li className="anchor-style">
              <FontAwesomeIcon icon={faBook} className="icons-style" />
              <NavLink className="" to="/Topics">Topics</NavLink>
            </li>
          </ul>
          <ul className="w-full flex gap-x-2 ml-5 justify-end mr-3">
            <div className="w-2/3 h-20px flex items-center">
              <input
                type="text"
                name=""
                id=""
                className="w-full outline-0 max-sm:h-[1.1rem] h-8 px-3 ring-1 ring-amber-950 rounded-4xl"
              />
            </div>
            <li className="anchor-style">
              <FontAwesomeIcon icon={faSearch} className="icons-style" />
              search
            </li>
          </ul>
          <ul className="flex space-x-1 sm:space-x-2 max-sm:w-1">
            <li className="anchor-style">
              <button className="btn-style max-sm:text-[10px]" onClick={handleLogin}>
                Login
              </button>
            </li>
            <li className="anchor-style">
              <button className="btn-style max-sm:text-[10px]" onClick={handleSignup}>
                Signup
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
