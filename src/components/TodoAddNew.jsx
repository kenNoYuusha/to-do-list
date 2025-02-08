import { BsPlus } from "react-icons/bs";
const TodoAddNew = ({ setShowModal }) => {
  return (
    <button
      className="w-full flex justify-center pl-3 pr-4 py-2 gap-1 rounded-xl shadow-md bg-gradient-to-br from-orange-300 via-orange-200 to-orange-300 hover:shadow-lg dark:from-orange-700 dark:via-zinc-900 dark:to-orange-700 dark:border-2 border-zinc-50"
      onClick={() => {
        setShowModal(true);
      }}
      aria-label="Agregar nueva tarea"
    >
      <div className="text-2xl">
        <BsPlus />
      </div>
      Nuevo
    </button>
  );
};
export { TodoAddNew };
