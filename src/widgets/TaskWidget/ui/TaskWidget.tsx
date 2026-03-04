import TaskList from "features/TaskList";
import styles from './TaskWidget.module.css';

const TaskWidget = () => {
  return (
    <div className={styles.TaskWidget}>
      <TaskList />
    </div>
  );
}

export default TaskWidget;
