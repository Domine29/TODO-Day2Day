import React from 'react';

export default function AddTask() {
  return (
    <form className="h-full">
      <div className="w-[75%] xl:w-full h-full flex items-center relative">
        <input
          id="add-task"
          name="add-task"
          type="text"
          className="appearance-none rounded-md block bg-slate-200/60
          w-full px-3 py-1 border border-gray-300
          placeholder-gray-500 text-gray-700 text-xs h-full focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Add Task"
        />
        <button className="absolute ml-auto mr-1 right-0 my-auto" type="button">
          <svg
            width="15"
            height="15"
            className="fill-theme-lt-blue hover:fill-theme-lt-blue-darken"
          >
            <path d="M12.5 0h-10A2.5 2.5 0 0 0 0 2.5v10A2.5 2.5 0 0 0 2.5 15h10a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 12.5 0ZM10 8.333H8.333V10a.833.833 0 0 1-1.666 0V8.333H5a.833.833 0 1 1 0-1.666h1.667V5a.833.833 0 1 1 1.666 0v1.667H10a.833.833 0 0 1 0 1.666Z" />
          </svg>
        </button>
      </div>
    </form>
  );
}
