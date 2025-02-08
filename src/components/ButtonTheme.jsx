import { useTheme } from "../js/useTheme";
import { BsMoon, BsSun, BsTv } from "react-icons/bs";

const ButtonTheme = () => {
  const [theme, toogleTheme] = useTheme();
  return (
    <button
      className="px-4 py-3 rounded-full shadow-md dark:shadow-zinc-50 dark:shadow-sm"
      aria-label="Cambiar modo dark/light"
      onClick={toogleTheme}
    >
      {theme === "dark" ? <BsMoon /> : theme === "ligth" ? <BsSun /> : <BsTv />}
    </button>
  );
};
export { ButtonTheme };
