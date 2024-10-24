import { BsX, BsCheck } from "react-icons/bs";
const TodoItem = ({ description, completed, completeTodo, deleteTodo }) => {
  return (
    <li className="w-full flex flex-row items-center justify-between ">
      <span
        className={`pr-1 cursor-pointer ${
          completed && "text-green-700 dark:text-green-300"
        }`}
        onClick={() => {
          completeTodo(description);
        }}
      >
        <BsCheck />
      </span>
      <p
        className={`grow overflow-auto border-b border-dashed border-slate-700  dark:border-slate-100 dark:text-white ${
          completed && "line-through"
        }`}
      >
        {description}
      </p>
      <span
        className="pl-1 cursor-pointer text-red-700 dark:text-red-300"
        onClick={() => {
          deleteTodo(description);
        }}
      >
        <BsX />
      </span>
    </li>
  );
};
export { TodoItem };
