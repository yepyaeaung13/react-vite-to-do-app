import React from "react";
import List from "./List";
import EmptyList from "./EmptyList";

const ListGroup = ({ tasks, setTasks, checked, deleteTask, updateTask }) => {
  return (
    <ul className="mt-3">
      <EmptyList />
      {tasks.map((task) => (
        <List
          key={task.id}
          id={task.id}
          job={task.job}
          isDone={task.isDone}
          checked={checked}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
};

export default ListGroup;
