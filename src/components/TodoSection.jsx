import { ButtonDark } from "../components/ButtonDark";
import { BsMoon, BsSun } from "react-icons/bs";
const TodoSection = ({ children, darkMode, setDarkMode }) => {
  return (
    <section className="w-full flex flex-col items-center gap-4 p-4 bg-zinc-100 dark:bg-zinc-800">
      <ButtonDark setDarkMode={setDarkMode}>
        {!darkMode ? <BsSun /> : <BsMoon />}
      </ButtonDark>
      <h1 className="text-center font-bold dark:text-zinc-200">
        To Do List
      </h1>
      {children}
    </section>
  );
};
export { TodoSection };
