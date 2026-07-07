import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);

  
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      
      dispatch(addTodo({
        id: Date.now(),
        todo: newTodo
      }));
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    
    dispatch(deleteTodo(id));
  };

  return (
    <div className="w-1/2 text-center mx-auto mt-28 p-4 border">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="flex justify-center">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border w-2/3 border-gray-300 rounded p-2 mr-2"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
        >
          Add Todo
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((items) => (
          <li
            key={items.id}
            className="flex justify-between border mt-2.5 p-1.5 w-4/5 items-center m-auto border-gray-300 rounded"
          >
            <span>{items.todo}</span>
            <button
              onClick={() => handleDeleteTodo(items.id)}
              className="text-white bg-red-500 px-4 py-2 rounded cursor-pointer hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;