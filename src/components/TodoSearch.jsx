import { BsSearch } from "react-icons/bs";
import { useState } from "react";
const TodoSearch = () => {
  const [focusSearch, setFocusSearch] = useState(false);

  return (
    <div className={`w-full h-auto py-3 px-mobileRangeSpacing flex flex-row gap-x-mobileRangeSpacing text-mobileRange bg-white rounded-full transition-shadow ${focusSearch ? "shadow-md" : "shadow-sm dark:shadow-none transition-shadow"} dark:bg-zinc-700 dark:shadow-slate-500`}>
      <label
        className="grid place-items-center text-slate-400 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100"
        htmlFor="todoSearch"
      >
        <BsSearch />
      </label>
      <input
        className="px-mobileRangeSpacing outline-none basis-5 grow border-l-[1px] border-slate-300 bg-transparent dark:border-zinc-100 dark:text-white"
        type="search"
        id="todoSearch"
        onFocus={() => {setFocusSearch(true)}}
        onBlur={() => {setFocusSearch(false)}}
      />
    </div>
  );
};
export { TodoSearch };
