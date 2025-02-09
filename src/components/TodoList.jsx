const TodoList = ({
  error,
  loading,
  filteredTodos,
  totalTodos,
  todoSearch,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearch,
  render,
  children,
}) => {
  const renderFunc = render || children;

  if (!error && !loading && !!filteredTodos.length) {
    return (
      <ul className="w-full h-5/6 flex flex-row flex-wrap p-2 content-start gap-2 overflow-y-scroll bg-zinc-500/50 rounded-lg dark:bg-zinc-900/70">
        {filteredTodos.map(renderFunc)}
      </ul>
    );
  } else {
    return (
      <div className="w-full h-5/6 grid place-items-center bg-zinc-500/50 rounded-lg dark:bg-zinc-900/70">
        {error && onError()}
        {!error && loading && onLoading()}
        {!error && !loading && !totalTodos && onEmptyTodos()}
        {!error &&
          !loading &&
          !!totalTodos &&
          !filteredTodos.length &&
          onEmptySearch(todoSearch)}
      </div>
    );
  }
};
export { TodoList };
