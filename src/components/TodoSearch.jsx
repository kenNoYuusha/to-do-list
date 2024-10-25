import { BsSearch } from "react-icons/bs";
import { useState } from "react";
const TodoSearch = ({todoSearch, setTodoSearch, loading}) => {
  const [focusSearch, setFocusSearch] = useState(false);

  return (
    <div className={`w-full max-w-screen-sm py-3 px-4 flex flex-row gap-4 bg-white rounded-full transition-shadow ${focusSearch ? "shadow-md" : "shadow-sm dark:shadow-none"} dark:bg-zinc-700 dark:shadow-slate-500 ${loading && "opacity-40"}`}>
      <label
        className="grid place-items-center text-slate-400 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100"
        htmlFor="todoSearch"
      >
        <BsSearch title="Filter to-do"/>
      </label>
      <input
        className="pl-4 basis-40 grow outline-none border-l border-slate-300 bg-transparent dark:border-zinc-100 dark:text-white"
        type="search"
        id="todoSearch"
        onFocus={() => {setFocusSearch(true)}}
        onBlur={() => {setFocusSearch(false)}}
        onChange={(e) => setTodoSearch(e.target.value)}
        value={todoSearch}
        disabled={loading}
      />
    </div>
  );
};
export { TodoSearch };
