import { useApp } from "./js/useApp";
import { Layout } from "./Layout";
import { TodoHeader } from "./TodoHeader";
import { TodoMain } from "./TodoMain";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoCounter } from "./components/TodoCounter";
import { TodoAddNew } from "./components/TodoAddNew";
import { Modal } from "./components/Modal";
import { CreateTodoForm } from "./components/CreateTodoForm";
import { TodoError } from "./components/TodoError";
import { TodoLoading } from "./components/TodoLoading";
import { TodoEmptyList } from "./components/TodoEmptyList";
import { TodoEmptySearch } from "./components/TodoEmptySearch";
import { ButtonTheme } from "./components/ButtonTheme";

const App = () => {
  const {
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
    <Layout>
      <TodoHeader
        buttonTheme={<ButtonTheme />}
        todoAdd={<TodoAddNew setShowModal={setShowModal} />}
        todoSearch={
          <TodoSearch
            todoSearch={todoSearch}
            setTodoSearch={setTodoSearch}
            loading={loading}
          />
        }
      />
      <TodoMain>
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

        {showModal && (
          <Modal>
            <CreateTodoForm
              setShowModal={setShowModal}
              createTodo={createTodo}
            />
          </Modal>
        )}
      </TodoMain>
    </Layout>
  );
};

export default App;
