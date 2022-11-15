import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useApp = () => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  let filteredTodos;
  const [darkMode, setDarkMode] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [todoSearch, setTodoSearch] = useState("");

  if (todoSearch.length > 0) {
    filteredTodos = todos.filter((todo) => {
      const todoText = todo.description.toLowerCase();
      const searchText = todoSearch.toLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    filteredTodos = todos;
  }

  const completeTodo = (todoName) => {
    const todoId = todos.findIndex((todo) => todo.description === todoName);
    const newListTodos = [...todos];
    newListTodos[todoId].completed = !newListTodos[todoId].completed;
    saveTodos(newListTodos);

    // const newTaskList = tasks.map((task) => {
    //   if (task.description === taskName) {
    //     task.completed = !task.completed;
    //     return task;
    //   } else {
    //     return task;
    //   }
    // });
    // setTasks(newTaskList);
  };
  const deleteTodo = (todoName) => {
    // const taskId = tasks.findIndex(task => task.description === taskName);
    // const newListTasks = [...tasks];
    // newListTasks.splice(taskId,1);
    // setTasks(newListTasks);

    const newListTodos = todos.filter((todo) => todo.description !== todoName);
    saveTodos(newListTodos);
    // setTasks((tasks) => tasks.filter((task) => task.description !== taskName));
  };

  const createTodo = (todoName) => {
    const newListTodos = [...todos, {
      description: todoName,
      completed: false,
    }];
    saveTodos(newListTodos);
  }

  return {
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
  };
};
export { useApp };
