import React from 'react';

export default function RadioBtn({ name }) {
  return (
    <div className="flex space-x-0.5">
      <input
        checked
        type="radio"
        value=""
        name={name}
        id={name}
        className="form-check-input border-theme-lt-blue bg-transparent text-theme-lt-blue focus:ring-0 focus:ring-offset-0 border-[1.5px]"
      />
      <label htmlFor={name} className="">
        {name}
      </label>
    </div>
  );
}
