import { useState } from "react";

const useTodoLogic = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, updatedFields) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, ...updatedFields } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return { todos, addTodo, updateTodo, deleteTodo, toggleComplete, setTodos };
};

export default useTodoLogic;
