import React, { useState } from "react";
import styles from "./styles.module.css";
import Task from "./Task";

function Main(props) {
  const [inputValue, setInputValue] = useState("");
  function resetInput() {
    setInputValue("");
  }

  function handleChange(e) {
    const value = e.target.value;
    setInputValue(value);
  }

  return (
    <div className={styles.main}>
      <input
        type="text"
        className={styles.input}
        placeholder="Write it down"
        onChange={handleChange}
        value={inputValue}
      ></input>
      <button
        className={styles.addBtn}
        disabled={inputValue === ""}
        onClick={() => {
          props.createTask(inputValue);
          resetInput();
        }}
      >
        Add task
      </button>

      {props.tasks.map((task) => {
        return (
          <Task key={task.id} data={task} removeTask={props.removeTask}></Task>
        );
      })}
    </div>
  );
}

export default Main;
