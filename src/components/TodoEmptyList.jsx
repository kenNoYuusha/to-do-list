import { GiNotebook } from "react-icons/gi";
const TodoEmptyList = () => {
  return <li className="w-full h-full grid place-items-center text-center text-zinc-700 dark:text-zinc-200">
    {/* <div>
      <p>We've got nothing yet</p>
      <p>Insert something</p>
      <div className="text-7xl grid place-items-center">
        <GiNotebook />
      </div>
    </div> */}
    <p>Escribe tu primer to-do</p>
  </li>;
};

export { TodoEmptyList };
