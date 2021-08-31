import Todo from "./components/Todo";
import * as React from "react";

let taskList = ["npx create-react-app todolist", "cd todolist", "npm start"];

function App() {
  const [tasks, setTasks] = React.useState(taskList);
  const [userInput, setUserInput] = React.useState("");

  const handleChange = (e) => {
    // get the value from the form
    setUserInput(e.currentTarget.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    let newState = [...tasks, userInput];
    userInput && setTasks(newState);
    setUserInput("");
  }

  return (
    <div>
      <h1>Create a React App</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Add something..."
        ></input>
        <button className="btn">Add a Task</button>
      </form>

      {tasks.map((task, index) => {
        return (
          <Todo
            key={index}
            id={index}
            text={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        );
      })}
    </div>
  );
}

export default App;
