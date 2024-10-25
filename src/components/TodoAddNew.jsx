import { BsPlus } from "react-icons/bs";
const TodoAddNew = ({setShowModal}) => {
  return (
    <button className="absolute right-2 bottom-10 p-2 text-3xl grid bg-amber-400 hover:bg-amber-500 text-white rounded-full dark:bg-zinc-800 dark:hover:bg-zinc-900/60 dark:active:bg-zinc-900 dark:shadow-zinc-500 dark:shadow-md"
      onClick={() => { setShowModal(true) }}
      aria-label="Agregar nueva tarea"
    >
      <BsPlus />
    </button>
  );
};
export { TodoAddNew };
