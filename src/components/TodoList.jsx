const TodoList = ({ children }) => {
  return (
    <ul className="w-full h-5/6 flex flex-col items-center justify-start  p-mobileRangeSpacing overflow-y-auto bg-white/50 rounded-lg dark:bg-zinc-700/70">
      {children}
    </ul>
  );
};
export { TodoList };
