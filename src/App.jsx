import { useApp } from "./js/useApp";
import { TodoSection } from "./components/TodoSection";
import { TodoSearch } from "./components/TodoSearch";
import { TodoContainer } from "./components/TodoContainer";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoCounter } from "./components/TodoCounter";
import { TodoAddNew } from "./components/TodoAddNew";
import { ButtonDark } from "./components/ButtonDark";
import { BsMoon, BsSun } from "react-icons/bs";
import { Modal } from "./components/Modal";
import { CreateTodoForm } from "./components/CreateTodoForm";
import { TodoError } from "./components/TodoError";
import { TodoLoading } from "./components/TodoLoading";
import { TodoEmptyList } from "./components/TodoEmptyList";
import { TodoEmptySearch } from "./components/TodoEmptySearch";

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
    <main className={`absolute ${darkMode && "dark"} w-full`}>
      <ButtonDark setDarkMode={setDarkMode}>
        {!darkMode ? <BsSun /> : <BsMoon />}
      </ButtonDark>

      <TodoSection>
        <TodoSearch
          todoSearch={todoSearch}
          setTodoSearch={setTodoSearch}
          loading={loading}
        />

        <TodoContainer>
          <TodoList
            error={error}
            loading={loading}
            filteredTodos={filteredTodos}
            totalTodos={totalTodos}
            todoSearch={todoSearch}
            onError={() => <TodoError />}
            onLoading={() => <TodoLoading />}
            onEmptyTodos={() => <TodoEmptyList />}
            onEmptySearch={(searchText) => (
              <TodoEmptySearch searchText={searchText} />
            )}
            render={({ description, completed }) => (
              <TodoItem
                description={description}
                completed={completed}
                key={description}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              />
            )}
          >
            {({ description, completed }) => (
              <TodoItem
                description={description}
                completed={completed}
                key={description}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              />
            )}
          </TodoList>

          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            loading={loading}
          />
    
          <TodoAddNew setShowModal={setShowModal} />
          {showModal && (
            <Modal darkMode={darkMode}>
              <CreateTodoForm
                setShowModal={setShowModal}
                createTodo={createTodo}
              />
            </Modal>
          )}
        </TodoContainer>
      </TodoSection>
    </main>
  );
};

export default App;
