import { deleteTodo, updateTodo } from "../store/todoSlice/todoSlice";
import { timeAgo } from "../util/timeFormat";
import Checkbox from "./Checkbox";
import Close from "./Close";
import { useDispatch } from "react-redux";

const TodoItem = ({ item }) => {
  const myTime = timeAgo(item.created_at);

  const dispatch = useDispatch();

  const updateHandler = () => {
    dispatch(updateTodo({ id: item.id, done: !item.done }));
  };

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(item.id));
    window.location.reload();
  };
  return (
    <li className="p-4 flex gap-4">
      {item.done && <Checkbox />}
      <p onClick={updateHandler} className="cursor-pointer">
        <span className="text-xs mr-4 border py-1 px-2 rounded text-neutral-400 border-neutral-700 bg-neutral-950 ">
          {myTime}
        </span>
        {item.title}
      </p>
      <button
        className="ml-auto text-neutral-400 hover:text-red-500 "
        onClick={deleteTodoHandler}
      >
        <Close />
      </button>
    </li>
  );
};

export default TodoItem;
