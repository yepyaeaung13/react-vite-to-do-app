import { useEffect, useState } from "react";
import NewTaskForm from "./NewTaskForm";
import NewTaskList from "./NewTaskList";
import CountSection from "./CountSection";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("TASKS");
    if (localValue == null) {
      return [];
    }

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w-96 min-h-96 mx-auto p-5 mt-5 bg-zinc-100">
      <h1 className="text-2xl mb-3 font-bold">List Builder App</h1>
      <NewTaskForm setTasks={setTasks} />
      <CountSection tasks={tasks} />
      <NewTaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
