import { useState } from "react";
import { TodoSearch } from "./components/TodoSearch";
import { TodoContainer } from "./components/TodoContainer";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoCounter } from "./components/TodoCounter";
import { TodoAddNew } from "./components/TodoAddNew";
import { BsMoon, BsSun } from "react-icons/bs";

const App = () => {
  const tasks = [
    { description: "lavar los platos", completed: false },
    { description: "pasear al perro", completed: false },
    { description: "comprar comida", completed: true },
    { description: "ver la serie", completed: false },
    { description: "dormir", completed: true },
    // { description: "ver la serie arcane", completed: false },
    // { description: "cepillarse", completed: false },
  ];
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className={darkMode ? "dark" : "block"}>
      <button
        className="fixed top-mobileRangeSpacing left-mobileRangeSpacing px-mobileRangeSpacing py-3 w-auto h-auto text-mobileRange text-slate-500 rounded-full shadow-md z-10 hover:bg-zinc-200 active:bg-zinc-300 dark:shadow-zinc-500 dark:text-zinc-200 dark:hover:bg-zinc-900/60 dark:active:bg-zinc-900"
        onClick={() => {
          setDarkMode((state) => !state);
        }}
      >
        {!darkMode ? <BsSun /> : <BsMoon />}
      </button>
      <section className="relative w-full max-w-3xl h-screen flex flex-col items-center justify-center gap-y-mobileRangeSpacing p-mobileRangeSpacing bg-zinc-100 dark:bg-zinc-800">
        <h1 className="w-full h-auto text-2xl font-bold grid place-items-center dark:text-zinc-200">
          To Do List
        </h1>
        <TodoSearch />
        <TodoContainer>
          <TodoList>
            {tasks.map(({ description, completed }) => (
              <TodoItem
                description={description}
                completed={completed}
                key={description}
              />
            ))}
          </TodoList>
          <TodoCounter />
          <TodoAddNew />
        </TodoContainer>
      </section>
    </main>
  );
};

export default App;
