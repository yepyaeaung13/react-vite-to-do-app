import undrawNoData from "./assets/undrawNoData.png";

const NewTaskList = ({ tasks, setTasks }) => {
  function deleteTask(id) {
    setTasks((currentTaks) => {
      return currentTaks.filter((task) => task.id !== id);
    });
  }
  const toggleTasks = (completed, id) => {
    setTasks((currentTaks) => {
      return currentTaks.map((task) => {
        if (task.id === id) {
          return { ...tasks, completed: completed };
        }
      });
    });
  };
  return (
    <ul className="p-3 flex flex-col gap-2">
      <li className="hidden last:block">
        <div className="flex flex-col items-center">
          <img
            src={undrawNoData}
            className="w-56 m-3 rounded-lg"
            alt="empty lists"
          />
          <p className="text-sm text-zinc-500">There Is No Lists</p>
        </div>
      </li>
      {tasks.map((task) => {
        return (
          <li
            className="flex justify-between items-start gap-2 text-sm"
            key={task.id}
          >
            <div className="flex items-start gap-1">
              <input
                type="checkbox"
                className="translate-y-1"
                checked={task.completed}
                onChange={(e) => {
                  toggleTasks(e.target.checked, task.id);
                }}
              />
              <p>{task.title}</p>
            </div>
            <button
              className="text-red-500"
              onClick={() => {
                deleteTask(task.id);
              }}
            >
              Del
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default NewTaskList;
