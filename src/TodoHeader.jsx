export const TodoHeader = ({ buttonTheme, todoAdd, todoSearch }) => {
  return (
    <header className="w-full px-4 py-8 bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-200 text-zinc-900 dark:from-zinc-900 dark:via-yellow-700 dark:to-zinc-900 dark:text-zinc-50">
      <div className="max-w-screen-lg mx-auto flex flex-row flex-wrap justify-between gap-4">
        <div className="basis-56 grow max-w-lg">{todoSearch}</div>
        <div className="basis-36 grow order-1 xs:basis-24 xs:order-none max-w-md">
          {todoAdd}
        </div>
        {buttonTheme}
      </div>
    </header>
  );
};
