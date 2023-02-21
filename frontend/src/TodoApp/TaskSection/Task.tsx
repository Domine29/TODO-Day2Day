import Checkbox from './Checkbox';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';

export default function Task({task_data}) {
  return (
    <div className="flex items-center bg-slate-200/60 rounded-md h-11 text-base w-full px-3 ">
      <h2 className="w-auto mr-2">{task_data.title}</h2>
      <EditBtn />
      <Checkbox />
      <DeleteBtn />
    </div>
  );
}
