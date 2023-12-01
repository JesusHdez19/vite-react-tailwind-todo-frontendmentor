import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  {
    id: 1,
    title: "Complete online Java Scripte Course",
    completed: true,
  },
  {
    id: 2,
    title: "Go to the gym",
    completed: false,
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    title: "Pick up groceries",
    completed: false,
  },
  {
    id: 5,
    title: "Complete todo app on front end mentor",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const [filter, setFilter] = useState("all");
  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-300 bg-[url('./assets/imgs/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/imgs/bg-mobile-dark.jpg')]">
        <Header />

        <main className="container mx-auto mt-8 px-4">
          <TodoCreate createTodo={createTodo} />
          <TodoList
            todos={filteredTodos()}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
          <TodoComputed
            computedItemsLeft={computedItemsLeft}
            clearCompleted={clearCompleted}
          />
          <TodoFilter changeFilter={changeFilter} filter={filter} />
        </main>

        <footer className="mt-8 text-center transition-all duration-1000 dark:text-gray-400">
          Drag and drop to recorder List
        </footer>
      </div>
    </>
  );
};
export default App;
