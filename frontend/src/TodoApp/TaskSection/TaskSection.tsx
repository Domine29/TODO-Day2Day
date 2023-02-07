import React from 'react';
import StatusSection from './StatusSection';

export default function TaskSection() {
  return (
    <div className="flex flex-col w-11/12 mx-auto max-w-[25.875rem]">
      <StatusSection status="Pending" />
      <StatusSection status="Completed" />
    </div>
  );
}
