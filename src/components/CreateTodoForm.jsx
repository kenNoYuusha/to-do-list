import { useState } from "react";
import { BsXLg } from "react-icons/bs";
const CreateTodoForm = ({ setShowModal, createTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const clickEventHandler = () => {
    setShowModal(false);
  };

  const changeEventHandler = (e) => {
    if (newTodo.length <= 120) {
      setNewTodo(e.target.value);
    }
  };

  const submitEventHandler = (e) => {
    e.preventDefault();
    if (newTodo.trim().length >= 1) {
      createTodo(newTodo);
      clickEventHandler();
    }
  };

  return (
    <form
      className="w-full max-w-screen-xs flex flex-col items-center gap-4 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
      onSubmit={submitEventHandler}
    >
      <button
        type="button"
        className="self-end hover:cursor-pointer text-lg"
        onClick={clickEventHandler}
      >
        <BsXLg />
      </button>
      <label htmlFor="newTodo">New Task</label>
      <input
        type="text"
        value={newTodo}
        id="newTodo"
        className="w-full px-3 py-2 rounded-md bg-white dark:bg-zinc-700 shadow-sm focus:shadow-md outline-none"
        onChange={changeEventHandler}
        autoFocus
      />
      <div className="w-full flex flex-row gap-4 justify-center items-center">
        <button
          type="button"
          className="px-4 py-2 border-2 border-zinc-900 dark:border-zinc-50 rounded-md"
          onClick={clickEventHandler}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border-2 bg-yellow-200 dark:bg-amber-300 text-black border-yellow-200 dark:border-amber-300 rounded-md"
        >
          Add
        </button>
      </div>
    </form>
  );
};
export { CreateTodoForm };
