import React from "react";
import type { Task } from "../model/types";
import styles from './TaskCard.module.css';

const TaskCard = React.memo(({ task, onDelete }: { task: Task; onDelete: () => void }) => {
  return (
    <div className={styles.TaskCard}>
      <input type="checkbox" checked={task.completed} disabled />
      {task.title}
      <button onClick={onDelete} className={styles.DeleteButton}>Удалить</button>
    </div>
  );
});

export default TaskCard;
