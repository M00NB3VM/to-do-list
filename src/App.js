import React from "react";
import { useState } from "react";
import styles from "./components/styles.module.css";
import Main from "./components/Main";

function App() {
  const [tasks, setTasks] = useState([]);

  const time = Math.floor(Date.now() / 1000);

  function createTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, id: time }];
    });
  }

  function removeTask(id) {
    const taskList = [...tasks].filter((task) => task.id !== id);
    setTasks(taskList);
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.background}></div>
        <h1 className={styles.h1}>To Do</h1>
      </header>
      <Main
        className={styles.main}
        tasks={tasks}
        createTask={createTask}
        removeTask={removeTask}
      ></Main>
    </div>
  );
}

export default App;
