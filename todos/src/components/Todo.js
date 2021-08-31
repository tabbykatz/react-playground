import * as React from "react";

function Todo(props) {
  function deleteHandler() {
    props.setTasks(props.tasks.filter((val, index, arr) => index !== props.id));
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
