const TodoContainer = ({ children }) => {
  return (
    <section className="max-h-[75%] h-full container mx-auto max-w-screen-lg p-2 md:p-4 shadow-md rounded-lg bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-200 dark:from-amber-300 dark:via-amber-200 dark:to-amber-300">
      {children}
    </section>
  );
};
export { TodoContainer };
