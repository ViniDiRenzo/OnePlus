import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

function Toast({ isShown, message, type, onClose }) {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [onClose]);

  return (
    <div
      className={`bg-white text-black ring-2 ring-black shadow-xl rounded-md px-6 py-2 fixed top-24 duration-300 ${
        isShown ? "right-9" : "-right-80"
      }`}
    >
      <div className={`flex items-center gap-4`}>
        {type === "fail" ? <MdOutlineClose size={24} /> : <FaCheck size={24} />}
        <p>Message Sent Succesfully!</p>
      </div>
    </div>
  );
}

export default Toast;
