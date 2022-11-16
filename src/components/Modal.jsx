import { createPortal } from "react-dom";

const Modal = ({ children, darkMode }) => {
  return createPortal(
    <div
      id="teletransportacion"
      className={`${darkMode && "dark"} absolute z-10 w-full h-screen grid place-items-center bg-slate-700/80 `}
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
};
export { Modal };
