import { BsSearch } from "react-icons/bs";
import { useState } from "react";
const TodoSearch = ({ todoSearch, setTodoSearch, loading }) => {
  const [focusSearch, setFocusSearch] = useState(false);

  return (
    <div
      className={`w-full max-w-xs py-3 px-4 md:self-end flex flex-row gap-3 rounded-full dark:shadow-zinc-800 
        ${focusSearch ? "shadow-sm" : "shadow-none"} 
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
