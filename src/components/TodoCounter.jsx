const TodoCounter = ({totalTodos, completedTodos, loading}) => {
  return <p className={`w-full ${loading && "opacity-50"}`}>Has completado {completedTodos} de {totalTodos} To do's</p>;
};
export { TodoCounter };
