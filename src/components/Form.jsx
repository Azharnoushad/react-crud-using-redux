import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodo } from "../store/todoSlice/todoSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");

  const addTodoHandler = () => {
    dispatch(createTodo([{ title: todoInput, done: false }]));
    setTodoInput("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-between">
      <input
        placeholder="Add todo item..."
        type="text"
        className="p-4 rounded border-2 border-neutral-700 bg-transparent flex-1"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        className="bg-green-600 py-4 px-6 rounded hover:bg-green-700 duration-300"
        onClick={addTodoHandler}
      >
        Add Todo
      </button>
    </div>
  );
};

export default Form;
