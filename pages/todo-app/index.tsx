// create a todo-app with tailwind and cas be tested by cypress
import React from "react";

const TodoApp = () => {
  // hooks todo
  const [todo, setTodo] = React.useState("");
  // hooks todos
  const [todos, setTodos] = React.useState<string[]>([]);

  // handle todo
  const handleTodo = (e: any) => {
    setTodo(e.target.value);
  };

  // handle add todo
  const handleAddTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  // handle delete todo
  const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-1/2">
        <h1 className="text-4xl font-bold mb-4">Todo App</h1>
        <div className="flex w-full">
          <input
            type="text"
            className="border border-gray-400 rounded-l px-4 py-2 w-full"
            value={todo}
            onChange={handleTodo}
            data-test-id="todo-input"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r"
            onClick={handleAddTodo}
            data-test-id="add-todo-button"
          >
            Add
          </button>
        </div>
        <div className="w-full mt-4" data-test-id="todo-list">
          {todos.map((todo, index) => (
            <div
              key={index}
              data-test-id="todo-item"
              className="flex items-center justify-between border border-gray-400 rounded px-4 py-2 mt-2"
            >
              <span>{todo}</span>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDeleteTodo(index)}
                data-test-id="delete-todo-button"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
