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
  return (
    <ul className="w-full h-5/6 flex flex-col items-center justify-start  p-mobileRangeSpacing overflow-y-auto bg-white/50 rounded-lg dark:bg-zinc-700/70">
      {error && onError()}
      {!error && loading && onLoading()}
      {!error && !loading && !totalTodos && onEmptyTodos()}
      {!error && !loading && !!totalTodos && !filteredTodos.length && onEmptySearch(todoSearch)}
      {!error && !loading && !!filteredTodos.length && filteredTodos.map(renderFunc)}
    </ul>
  );
};
export { TodoList };
