import TaskCard from "entities/task/ui/TaskCard";
import { useTasks, type Filter } from "../model/useTasks";
import { FilterButton } from "shared/ui";

const initialTasks = [...new Array(20)].map((_, index) =>
({
  id: index + '',
  title: `Заголовок задачи ${index}`,
  completed: index % 2 === 0,
}));

const TaskList = () => {
  const { tasks, filter, setFilter, removeTask } = useTasks(initialTasks);

  return (
    <>
      <FilterButton filter={filter} variants={{
        'all': 'Все задачи',
        'completed': 'Завершенные',
        'incomplete': 'Незавершенные',
      }} onChange={(newFilter) => setFilter(newFilter as Filter)} />
      
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} onDelete={() =>removeTask(task.id)} />
      ))}
    </>
  );
}

export default TaskList;
