import { BsSearch } from "react-icons/bs";
import { useState } from "react";
const TodoSearch = ({ todoSearch, setTodoSearch, loading }) => {
  const [focusSearch, setFocusSearch] = useState(false);

  return (
    <div
      className={`w-full py-2 px-3 flex flex-row gap-3 rounded-md
        bg-zinc-50 dark:bg-zinc-900 dark:shadow-zinc-50
        ${
          focusSearch
            ? "shadow-lg dark:shadow-sm"
            : "shadow-md dark:shadow-none"
        } 
        ${loading ? "opacity-40" : ""}`}
    >
      <label
        className="self-center opacity-60 hover:opacity-90"
        htmlFor="todoSearch"
      >
        <BsSearch title="Filter to-do" />
      </label>
      <input
        className="pl-3 w-full outline-none border-l bg-transparent"
        type="search"
        placeholder="Lavar los trastes..."
        id="todoSearch"
        onFocus={() => {
          setFocusSearch(true);
        }}
        onBlur={() => {
          setFocusSearch(false);
        }}
        onChange={(e) => setTodoSearch(e.target.value)}
        value={todoSearch}
        disabled={loading}
      />
    </div>
  );
};
export { TodoSearch };
