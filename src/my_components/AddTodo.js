import React, { useState } from "react";
export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or  Description can not be blank")
    }
    else{
    addTodo(title,desc);
    setTitle("")
    setDesc("")
    }
  };

  return (
    <div className="container my-3 ">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label for="title" class="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="todoTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="description" class="form-label">
            Todo Discription
          </label>
          <input
            type="text"
            className="form-control"
            id="todoDescription"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
