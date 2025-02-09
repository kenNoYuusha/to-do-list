import { BsXLg, BsCheckSquareFill } from "react-icons/bs";
const TodoItem = ({ description, completed, completeTodo, deleteTodo }) => {
  return (
    <li
      className={`w-full max-w-lg bg-yellow-50 dark:bg-zinc-900 basis-60 grow px-2 py-3 rounded-md flex flex-row justify-between gap-2 ${
        completed ? "opacity-50" : ""
      }`}
    >
      <span
        className={`pr-1 cursor-pointer self-center ${
          completed && "text-green-700 dark:text-green-300"
        }`}
        onClick={() => {
          completeTodo(description);
        }}
      >
        <BsCheckSquareFill />
      </span>
      <p
        className={`whitespace-normal min-w-0 break-words border-b border-dashed border-slate-700  dark:border-slate-100 dark:text-white ${
          completed && "line-through"
        }`}
      >
        {description}
      </p>
      <span
        className="pl-1 cursor-pointer text-red-700 dark:text-red-300 self-center"
        onClick={() => {
          deleteTodo(description);
        }}
      >
        <BsXLg />
      </span>
    </li>
  );
};
export { TodoItem };
