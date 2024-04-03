import Heading from "./Heading";
import NewTaskForm from "./NewTaskForm";
import StatusList from "./StatusList";
import ListGroup from "./ListGroup";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (job) => {
    const newTask = {
      id: Date.now(),
      job,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const checked = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isDone = !task.isDone;
        }
        return task;
      })
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const updateTask = (newJob, id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.job = newJob;
        }
        return task;
      })
    );
  };
  return (
    <div className="w-96 min-h-96 mx-auto p-5 mt-5 bg-zinc-100">
      <Heading />
      <NewTaskForm addTask={addTask} />
      <StatusList tasks={tasks} />
      <ListGroup
        tasks={tasks}
        setTasks={setTasks}
        checked={checked}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
};

export default App;
