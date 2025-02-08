import { BsPlus } from "react-icons/bs";
const TodoAddNew = ({ setShowModal }) => {
  return (
    <button
      className="absolute top-0 left-0 sm:top-4 sm:left-4 p-2 flex items-center gap-1 rounded-xl bg-gradient-to-br from-orange-200 via-orange-100 to-orange-200"
      onClick={() => {
        setShowModal(true);
      }}
      aria-label="Agregar nueva tarea"
    >
      <BsPlus />
      Agregar Tarea
    </button>
  );
};
export { TodoAddNew };
