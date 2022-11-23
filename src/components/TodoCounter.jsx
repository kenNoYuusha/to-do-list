const TodoCounter = ({totalTodos, completedTodos, loading}) => {
  return <p className={`w-full h-1/6 grid place-items-center font-medium text-mobileRange ${loading && "opacity-50"}`}>Has completado {completedTodos} de {totalTodos} To do's</p>;
};
export { TodoCounter };
