const ButtonDark = ({ children, setDarkMode }) => {
  return (
    <button
      className="absolute top-mobileRangeSpacing left-mobileRangeSpacing px-mobileRangeSpacing py-3 w-auto h-auto text-mobileRange text-slate-500 rounded-full shadow-md z-10 hover:bg-zinc-200 active:bg-zinc-300 dark:shadow-zinc-500 dark:text-zinc-200 dark:hover:bg-zinc-900/60 dark:active:bg-zinc-900"
      onClick={() => {
        setDarkMode((state) => !state);
      }}
    >
     {children}
    </button>
  );
};
export { ButtonDark };
