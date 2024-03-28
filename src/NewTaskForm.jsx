const NewTaskForm = ({ setTasks }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const form = document.querySelector("#taskForm");
    const formData = new FormData(form);
    const currentTask = formData.get("task");

    setTasks((tasks) => {
      return [
        ...tasks,
        { title: currentTask, id: crypto.randomUUID(), completed: false },
      ];
    });
    form.reset();
  };

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
