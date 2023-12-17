

const Form = () => {
 

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-between">
      <input
        placeholder="Add todo item..."
        type="text"
        className="p-4 rounded border-2 border-neutral-700 bg-transparent flex-1"
      />
      <button
        className="bg-green-600 py-4 px-6 rounded hover:bg-green-700 duration-300"
      >
        Add Todo
      </button>
    </div>
  );
};

export default Form;