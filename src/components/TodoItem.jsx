import Checkbox from "./Checkbox";
import Close from "./Close";

const TodoItem = () => {
 
  return (
    <li className="p-4 flex gap-4">
      <p  className={itemStyle}>
        {/* <span className="text-xs mr-4 border py-1 px-2 rounded text-neutral-400 border-neutral-700 bg-neutral-950">
          {timeAgo} hours ago
        </span> */}
      </p>
      <button
        className="ml-auto text-neutral-400 hover:text-red-500 "
      >
        <Close />
      </button>
    </li>
  );
};

export default TodoItem;
