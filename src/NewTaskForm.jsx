const NewTaskForm = () => {
  return (
    <form onSubmit={submitHandler} id="taskForm">
      <div className="flex mb-3">
        <input
          name="task"
          type="text"
          placeholder="enter your task"
          className="px-2 py-1 w-full"
        />
        <button className="text-2xl bg-blue-700 px-3 text-white">+</button>
      </div>
    </form>
  );
};

export default NewTaskForm;
