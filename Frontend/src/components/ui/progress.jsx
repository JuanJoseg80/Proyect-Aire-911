// src/components/ui/progress.jsx
import React from 'react';

export const Progress = ({ value, className }) => {
  return (
    <div className={`relative pt-1 pb-1 ${className}`}>
      <div className="flex mb-2 items-center justify-between">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
          Progress
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600">
          {value}%
        </span>
      </div>
      <div className="flex mb-2">
        <div className="relative flex w-full flex-col">
          <div className="flex mb-2 justify-between"></div>
          <div className="h-2 mb-2 overflow-hidden mb-4 flex rounded-full bg-teal-200">
            <div
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
              style={{ width: `${value}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
