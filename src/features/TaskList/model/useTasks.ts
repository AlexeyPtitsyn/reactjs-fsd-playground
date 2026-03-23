import type { Task } from 'entities/task';
import { useCallback, useMemo, useState } from 'react';

export type Filter = 'all' | 'completed' | 'incomplete';

export function useTasks(initial: Task[]) {
  const [tasks, setTasks] = useState<Task[]>(initial);
  const [filter, setFilter] = useState<Filter>('all');

  const filteredTasks = useMemo(() => {
    return tasks.filter(item => {
      if (filter === 'completed') return item.completed;
      if (filter === 'incomplete') return !item.completed;
      return true;
    });
  }, [tasks, filter]);

  const removeTask = useCallback((id: string) => setTasks(tasks.filter(item => item.id !== id)), [tasks]);

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
  };
}
