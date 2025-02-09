import { GiNotebook } from "react-icons/gi";
const TodoEmptySearch = ({ searchText }) => {
  return (
    <div className="flex flex-col justify-center min-w-0 break-words w-full h-full p-4 text-center">
      <p className="text-lg font-semibold">There's not results for:</p>
      <p>{searchText}</p>
    </div>
  );
};

export { TodoEmptySearch };
