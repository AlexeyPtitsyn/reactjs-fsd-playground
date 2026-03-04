import type { Task } from 'entities/task';
import { useState } from 'react';

export type Filter = 'all' | 'completed' | 'incomplete';

export function useTasks(initial: Task[]) {
  const [tasks, setTasks] = useState<Task[]>(initial);
  const [filter, setFilter] = useState<Filter>('all');

  const filteredTasks = tasks.filter(item => {
    if (filter === 'completed') return item.completed;
    if (filter === 'incomplete') return !item.completed; 
    return true;
  });

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask: (id: string) => setTasks(tasks.filter(item => item.id !== id)),
  };
}
