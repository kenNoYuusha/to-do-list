import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <div
      id="teletransportacion"
      className={`fixed top-0 right-0 bottom-0 left-0 text-md p-4 grid place-items-center bg-zinc-700/80 `}
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
};
export { Modal };
