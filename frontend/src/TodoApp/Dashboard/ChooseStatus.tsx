import React from 'react';
import RadioBtn from '../components/RadioBtn';

export default function ChooseStatus() {
  return (
    <div className="ml-auto text-xs flex flex-row gap-2 items-baseline">
      <RadioBtn name="Completed" />
      <RadioBtn name="Pending" />
    </div>
  );
}
