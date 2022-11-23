const TodoSection = ({ children }) => {
  return (
    <section className="relative w-full max-w-3xl h-screen flex flex-col items-center justify-center gap-y-mobileRangeSpacing p-mobileRangeSpacing bg-zinc-100 dark:bg-zinc-800">
      <h1 className="w-full h-auto text-2xl font-bold grid place-items-center dark:text-zinc-200">
        To Do List
      </h1>
      {children}
    </section>
  );
};
export { TodoSection };
