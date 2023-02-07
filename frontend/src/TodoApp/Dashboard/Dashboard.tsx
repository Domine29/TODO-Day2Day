import React from 'react';
import AddTask from './AddTask';
import ChooseStatus from './ChooseStatus';

export default function Dashboard() {
  return (
    <div className="border-y-2 border-theme-blue flex flex-row items-center px-2 py-2 h-10">
      <AddTask />
      <ChooseStatus />
    </div>
  );
}
