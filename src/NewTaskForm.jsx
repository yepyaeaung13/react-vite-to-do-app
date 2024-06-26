import { useState } from "react";

const NewTaskForm = ({ addTask }) => {
  const [text, setText] = useState("");
  const handleTextInput = (e) => {
    setText(e.target.value);
  };
  const handleAddBtn = () => {
    addTask(text);
    setText("");
  };

  return (
    <div className="flex mb-3">
      <input
        name="task"
        type="text"
        placeholder="enter your task"
        className="px-2 py-1 w-full border border-gray-400 focus:outline-none"
        value={text}
        onChange={handleTextInput}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleAddBtn();
          }
        }}
      />
      <button
        onClick={handleAddBtn}
        className="text-2xl bg-blue-700 px-3 text-white"
      >
        +
      </button>
    </div>
  );
};

export default NewTaskForm;
