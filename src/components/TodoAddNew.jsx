import { BsPlus } from "react-icons/bs";
const TodoAddNew = ({ setShowModal }) => {
  return (
    <button
      className="pl-2 pr-3 py-2 flex items-center gap-1 rounded-xl border-2 border-yellow-300 dark:border-amber-300 hover:bg-zinc-100 hover:dark:bg-zinc-800"
      onClick={() => {
        setShowModal(true);
      }}
      aria-label="Agregar nueva tarea"
    >
      <div className="text-2xl">
        <BsPlus />
      </div>
      New Task
    </button>
  );
};
export { TodoAddNew };
