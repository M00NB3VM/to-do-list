import React, { useState } from "react";
import styles from "./styles.module.css";

function Task(props) {
  const [complete, setComplete] = useState(false);

  function toggleClass() {
    setComplete(!complete);
  }

  function handleRemove() {
    const id = props.data.id;
    props.removeTask(id);
  }

  return (
    <div className={styles.task}>
      <div
        className={complete ? styles.completed : styles.checkbox}
        onClick={toggleClass}
      ></div>
      <p className={complete ? styles.completedText : styles.taskText}>
        {props.data.name}
      </p>
      <div className={styles.removeBtn} onClick={handleRemove}></div>
    </div>
  );
}

export default Task;
