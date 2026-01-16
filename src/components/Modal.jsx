import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faEnvelope,
  faUser,
  faKey,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
const Modal = ({ type, onClose }) => {
  const [showPass, setShowPass] = useState(false);
  // showPass = false;
  return (
    <div className="modal-box">
      <h3 className="heading-style">{type === "login" ? "Login" : "Signup"}</h3>

      <form className="flex flex-col gap-2 mt-3">
        <div className="box-style">
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
            <label>user email address</label>
          </span>

          <input type="email" className="input-style" required />
        </div>
        <div className="box-style">
          <span>
            <FontAwesomeIcon icon={faUser} />
            <label>user name</label>
          </span>

          <input type="text" className="input-style" required />
        </div>
        <div className="box-style">
          <span>
            <FontAwesomeIcon icon={faKey} />
            <label>Enter passoword</label>
          </span>
          <input
            type={showPass ? "text" : "password"}
            className="input-style"
            required
          />
          <span className="size-12 absolute right-5/19 sm:right-1/4 md:right-2/7 lg:right-3/10 2xl:right-5/16 top-48" onClick={()=>((setShowPass(!showPass)))}>
            {showPass ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </span>
        </div>
        <div className="submit-btn absolute bottom-3 overflow-hidden">
          <button className="btn-style">
            {type === "login" ? "Login" : "Signup"}
          </button>
        </div>
      </form>

      <button
        className="btn-style bg-amber-600 absolute top-1 right-1"
        onClick={onClose}>
        <FontAwesomeIcon
          icon={faXmark}
          className="text-[12px] hover:text-[14px]"
        />
      </button>
    </div>
  );
};

export default Modal;
