const TodoCounter = ({totalTodos, completedTodos}) => {
  return <p className="w-full h-1/6 grid place-items-center font-medium text-mobileRange">Has completado {completedTodos} de {totalTodos} To do's</p>;
};
export { TodoCounter };
