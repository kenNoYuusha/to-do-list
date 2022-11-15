import { BsX, BsCheck } from "react-icons/bs";
const TodoItem = ({ description, completed, completeTodo, deleteTodo }) => {
  return (
    <li className="w-full pt-mobileRangeSpacing flex flex-row items-center justify-between text-mobileRange border-b-[1px] border-dashed border-slate-700 first:pt-0 dark:border-slate-100">
      <span
        className={`basis-4 grid place-items-center cursor-pointer ${
          completed && "text-green-700 dark:text-green-300"
        }`}
        onClick={() => {
          completeTodo(description);
        }}
      >
        <BsCheck />
      </span>
      <p
        className={`basis-4 grow px-mobileRangeSpacing dark:text-white ${
          completed && "line-through"
        }`}
      >
        {description}
      </p>
      <span
        className="basis-4 grid place-items-center cursor-pointer text-red-700 dark:text-red-300"
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
