import { useTheme } from "../js/useTheme";
import { BsMoon, BsSun, BsTv } from "react-icons/bs";

const ButtonTheme = () => {
  const [theme, toogleTheme] = useTheme();
  return (
    <button
      className="self-end px-4 py-3 rounded-full shadow-sm dark:shadow-zinc-700"
      aria-label="Cambiar modo dark/light"
      onClick={toogleTheme}
    >
      {theme === "dark" ? <BsMoon /> : theme === "ligth" ? <BsSun /> : <BsTv />}
    </button>
  );
};
export { ButtonTheme };
