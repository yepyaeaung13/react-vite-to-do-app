import { useState } from "react";
import NewTaskList from "./NewTaskList";
import undrawNoData from "./assets/undrawNoData.png";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const form = document.querySelector("#taskForm");
    const formData = new FormData(form);
    const currentTask = formData.get("task");
    setTasks((tasks) => {
      return [...tasks, { title: currentTask, id: crypto.randomUUID() }];
    });
  };

  return (
    <div className="w-96 min-h-96 mx-auto p-5 mt-5 bg-zinc-100">
      <h1 className="text-2xl mb-3 font-bold">List Builder App</h1>
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
      <div className="flex justify-between">
        <p>Your Lists</p>
        <p className="bg-blue-700 text-xs text-white rounded-lg p-1">
          Done (<span>0</span>/<span>0</span>)
        </p>
      </div>
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
                <input type="checkbox" className="translate-y-1" />
                <p>{task.title}</p>
              </div>
              <button className="text-red-500">Del</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
