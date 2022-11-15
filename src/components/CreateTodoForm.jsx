import { useState } from "react";
import { BsX } from "react-icons/bs";
const CreateTodoForm = ({ setShowModal, createTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const clickEventHandler = () => {
    setShowModal(false);
  };

  const changeEventHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const submitEventHandler = (e) => {
    e.preventDefault();
    if(newTodo.length >= 1){
      createTodo(newTodo);
      setNewTodo("");
      clickEventHandler();
    }
  };

  return (
    <form
      className="relative justify-center items-center flex flex-col gap-y-mobileRangeSpacing px-mobileRangeSpacing py-12 border-2 border-white rounded-xl bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white text-mobileRange "
      onSubmit={submitEventHandler}
    >
      <button
        type="button"
        className="absolute top-mobileRangeSpacing right-mobileRangeSpacing"
        onClick={clickEventHandler}
      >
        <BsX />
      </button>
      <label htmlFor="newTodo">Nuevo To do</label>
      <input
        type="text"
        value={newTodo}
        id="newTodo"
        className="w-full px-mobileRangeSpacing py-2 rounded-md bg-white dark:bg-zinc-700 shadow-sm focus:shadow-md outline-none dark:focus:shadow-sm dark:focus:shadow-slate-500"
        onChange={changeEventHandler}
      />
      <div className="w-full flex flex-row justify-around items-center">
        <button
          type="button"
          className="px-mobileRangeSpacing py-2 border-2 border-zinc-800 dark:border-white rounded-md"
          onClick={clickEventHandler}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-mobileRangeSpacing py-2 border-2 bg-yellow-200 dark:bg-amber-300 text-black border-yellow-200 dark:border-amber-300 rounded-md"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};
export { CreateTodoForm };
