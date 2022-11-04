import React from "react";

function Task({text, category, onDeleteTask}) {
  function handleClick(){
    // console.log("tried to delete!")
    onDeleteTask(text)
    // console.log(text + " had to go!")
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
