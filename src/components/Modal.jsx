import { createPortal } from "react-dom";

const Modal = ({ children, showModal, darkMode }) => {
  return createPortal(
    <div
      id="teletransportacion"
      className={`${darkMode && "dark"} ${
        showModal ? "grid" : "hidden"
      } absolute z-10 w-full h-screen bg-slate-700/80 place-items-center`}
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
};
export { Modal };
