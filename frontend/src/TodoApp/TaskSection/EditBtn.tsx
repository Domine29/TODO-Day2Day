import React from 'react';

export default function EditBtn() {
  return (
    <button type="button" className="mr-1">
      <svg width="12" height="12" fill="none">
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".5"
          d="M6 11h5M8.5 1.36a1.15 1.15 0 0 1 1.28-.27 1.18 1.18 0 0 1 .64.67 1.3 1.3 0 0 1-.25 1.36l-6.95 7.3L1 11l.56-2.34 6.94-7.3Z"
        />
      </svg>
    </button>
  );
}
