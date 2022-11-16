import { GiNotebook } from "react-icons/gi";
const TodoEmptyList = () => {
  return <li className="w-full h-full grid place-items-center text-[40vw] text-zinc-700 dark:text-zinc-200">
    <p className="text-mobileRange text-center">We've got nothing yet<br/> Type something</p>
    <GiNotebook />
  </li>;
};

export { TodoEmptyList };
