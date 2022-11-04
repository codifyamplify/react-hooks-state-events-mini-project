import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")
// console.log(categories + " from newtaskform component")

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("")
    setCategory("Code")
  }
// console.log(category)
console.log(text)
  return (
 <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
