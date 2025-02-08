const TodoContainer = ({ children }) => {
  return (
    <div className="relative w-full h-[60vh] p-10 shadow-md rounded-lg bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-200 dark:from-amber-300 dark:via-amber-200 dark:to-amber-300">
      {children}
    </div>
  );
};
export { TodoContainer };
