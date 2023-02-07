import Checkbox from './Checkbox';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';

export default function StatusSection({ status }) {
  return (
    <div>
      <h2 className="w-full text-center border-b border-theme-drk-blue leading-[.1em] my-5">
        <span className="bg-[#fff] px-5">{status}</span>
      </h2>
      <div className="flex items-center bg-slate-200/60 rounded-md h-11 text-base w-full px-3 ">
        <h2 className="w-auto mr-2">Long Task</h2>
        <EditBtn />
        <Checkbox />
        <DeleteBtn />
      </div>
    </div>
  );
}
