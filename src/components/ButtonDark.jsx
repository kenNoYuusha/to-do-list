const ButtonDark = ({ children, setDarkMode }) => {
  return (
    <button
      className="self-end px-4 py-3 text-slate-500 rounded-full shadow-md z-10 hover:bg-zinc-200 active:bg-zinc-300 dark:shadow-zinc-500 dark:text-zinc-200 dark:hover:bg-zinc-900/60 dark:active:bg-zinc-900"
      aria-label="Cambiar modo dark/light"
      onClick={() => {
        setDarkMode((state) => !state);
      }}
    >
     {children}
    </button>
  );
};
export { ButtonDark };
