import React from "react";

const StatusList = ({ tasks }) => {
  return (
    <div className="flex justify-between">
      <p>Your Lists</p>
      <p className="bg-blue-700 text-xs text-white rounded-lg p-1">
        Done (<span>{tasks.filter((task) => task.isDone === true).length}</span>
        /<span>{tasks.length}</span>)
      </p>
    </div>
  );
};

export default StatusList;
