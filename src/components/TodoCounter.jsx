const TodoCounter = ({ totalTodos, completedTodos, loading }) => {
  if (totalTodos > 0) {
    return (
      <p className="text-center mt-4 dark:text-zinc-900">
        You've finished {completedTodos} of {totalTodos} tasks
      </p>
    );
  }
  return null;
};
export { TodoCounter };
