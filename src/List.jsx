import React, { useState } from "react";

const List = ({ id, job, isDone, checked, deleteTask, updateTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newJob, setNewJob] = useState(job);
  const handleCheckBox = () => {
    checked(id);
  };
  const handleDeleteBtn = () => {
    if (confirm("are you sure to delete?")) {
      deleteTask(id);
    }
  };
  const handleEditBtn = () => {
    setIsEdit(!isEdit);
  };
  const handleNewTextInput = (e) => {
    setNewJob(e.target.value);
  };
  const handleNewJob = (e) => {
    if (e.key === "Enter") {
      updateTask(newJob, id);
      handleEditBtn();
    }
  };
  return (
    <li
      className={`list group flex animate__animated animate__fadeInUp bg-zinc-50 justify-between border border-zinc-600 p-2 items-center mb-3 overflow-hidden rounded text-xs ${
        isDone && "bg-gray-200 pointer-events-none"
      }`}
    >
      <div className="list-text-box flex items-center">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="check-box accent-zinc-700"
            checked={isDone}
            onChange={handleCheckBox}
            disabled={isEdit}
          />
          <label
            className={`${isDone && "line-through"} ${isEdit && "hidden"}`}
          >
            {job}
          </label>
        </div>
        <div className={`ms-2 border ${!isEdit && "hidden"}`}>
          <input
            type="text"
            className="py-1 px-2 focus:outline-none border border-gray-400"
            value={newJob}
            onChange={handleNewTextInput}
            onKeyUp={handleNewJob}
          />
        </div>
      </div>
      <div className="flex gap-3 items-center duration-300 translate-x-[120%] group-hover:translate-x-0">
        <button
          className="list-edit-btn border duration-200 active:scale-90 border-zinc-700 p-1"
          onClick={handleEditBtn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-zinc-800 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
        <button
          className="list-del-btn border duration-200 active:scale-90 border-zinc-700 p-1"
          onClick={handleDeleteBtn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-zinc-800 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default List;
