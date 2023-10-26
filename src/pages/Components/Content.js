import React from 'react';

const ToggleButton = ({ isChecked, onChange }) => {
  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="sr-only"
        />
        <div className={`box block h-6 w-10 rounded-full ${isChecked ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
        <div className={`absolute left-1.5 top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-white transition-transform ${isChecked ? 'translate-x-full ' : ''}`}></div>
      </div>
    </label>
  );
};

export default ToggleButton;
