import Task from './Task';

export default function StatusSection({ status, tasks }) {
  console.log({ tasks });
  return (
    <div>
      <h2 className="w-full text-center border-b border-theme-drk-blue leading-[.1em] my-5">
        <span className="bg-[#fff] px-5">{status}</span>
      </h2>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => {
          return <Task task_data={task.fields} />;
        })}
      </div>
    </div>
  );
}
