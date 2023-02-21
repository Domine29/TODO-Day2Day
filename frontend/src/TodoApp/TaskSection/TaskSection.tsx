import { useLoaderData } from 'react-router-dom';
import { loadTasks } from '../utils/todo';
import StatusSection from './StatusSection';

export async function loader() {
  const tasks = await loadTasks();
  return { tasks };
}

export default function TaskSection() {
  const { tasks } = useLoaderData();
  const completed = tasks.filter((task) => {
    return task.fields.completed === true;
  });
  const pending = tasks.filter((task) => {
    return task.fields.completed === false;
  });

  return (
    <div className="flex flex-col w-11/12 mx-auto max-w-[25.875rem] gap-5">
      <StatusSection status="Pending" tasks={pending} />
      <StatusSection status="Completed" tasks={completed} />
    </div>
  );
}
