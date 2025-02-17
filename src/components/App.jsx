import React, { useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [taskLists, setTaskLists] = useState([]);
  function handleInputChange(event) {
    const value = event.target.value;
    return setInputText(value);
  }

  function handleAddButton() {
    setTaskLists((prevTaskLists) => {
      return [...prevTaskLists, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInputChange} value={inputText} type="text" />
        <button onClick={handleAddButton}>
          <span>Add</span>
        </button>
        <div>
          <ul>
            {taskLists.map((taskList) => (
              <li>{taskList}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
