import { GiNotebook } from "react-icons/gi";
const TodoEmptySearch = ({searchText}) => {
  return <li className="w-full h-full grid place-items-center text-center text-zinc-700 dark:text-zinc-200">
    {/* <p className="text-mobileRange text-center">We've got nothing for<br/> {searchText}</p>
    <GiNotebook /> */}
    <div>
    <p>No hay resultados para:</p>
    <p>{searchText}</p>
    </div>
  </li>;
};

export { TodoEmptySearch };