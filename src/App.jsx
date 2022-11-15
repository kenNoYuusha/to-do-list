import { useApp } from "./js/useApp";
import { TodoSearch } from "./components/TodoSearch";
import { TodoContainer } from "./components/TodoContainer";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoCounter } from "./components/TodoCounter";
import { TodoAddNew } from "./components/TodoAddNew";
import { BsMoon, BsSun } from "react-icons/bs";
import { Modal } from "./components/Modal";
import { CreateTodoForm } from "./components/CreateTodoForm";



const App = () => {
  const {
    darkMode,
    setDarkMode,
    todoSearch,
    setTodoSearch,
    filteredTodos,
    completeTodo,
    deleteTodo,
    createTodo,
    totalTodos,
    completedTodos,
    loading,
    error,
    showModal,
    setShowModal,
  } = useApp();

  return (
    <main className={`absolute ${ darkMode && "dark"}`}>
      <button
        className="fixed top-mobileRangeSpacing left-mobileRangeSpacing px-mobileRangeSpacing py-3 w-auto h-auto text-mobileRange text-slate-500 rounded-full shadow-md z-10 hover:bg-zinc-200 active:bg-zinc-300 dark:shadow-zinc-500 dark:text-zinc-200 dark:hover:bg-zinc-900/60 dark:active:bg-zinc-900"
        onClick={() => {
          setDarkMode((state) => !state);
        }}
      >
        {!darkMode ? <BsSun /> : <BsMoon />}
      </button>
      <section className="relative w-full max-w-3xl h-screen flex flex-col items-center justify-center gap-y-mobileRangeSpacing p-mobileRangeSpacing bg-zinc-100 dark:bg-zinc-800">
        <h1 className="w-full h-auto text-2xl font-bold grid place-items-center dark:text-zinc-200">
          To Do List
        </h1>
        <TodoSearch todoSearch={todoSearch} setTodoSearch={setTodoSearch} />
        <TodoContainer>
          <TodoList>
          {error && <p className="dark:text-white">Hubo un error</p>}
          {loading && <p className="dark:text-white">Cargando......</p>}
          {(!loading && !filteredTodos.length) && <p className="dark:text-white">Escribe tu primer todo</p>}
            {filteredTodos.map(({ description, completed }) => (
              <TodoItem
                description={description}
                completed={completed}
                key={description}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </TodoList>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoAddNew setShowModal={setShowModal}/>
          <Modal showModal={showModal} darkMode={darkMode}>
            <CreateTodoForm setShowModal={setShowModal} createTodo={createTodo}/>
          </Modal>
        </TodoContainer>
      </section>
    </main>
  );
};

export default App;