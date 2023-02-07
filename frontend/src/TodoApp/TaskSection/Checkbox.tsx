import React from 'react';

export default function Checkbox() {
  return (
    <input
      type="checkbox"
      id="true"
      name="checkoff"
      value="true"
      className="w-4 h-4 text-theme-lt-blue bg-transparent border-theme-lt-blue border-[1.5px] rounded focus:ring-0 focus:ring-offset-0"
    />
  );
}
