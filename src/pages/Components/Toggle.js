import React, { useState } from 'react';
import { useEffect } from 'react';

const ToggleButton = ({name}) => {
  useEffect(() => {
    const value = localStorage.getItem(name)
    setIsChecked(value==="true")
  }, []);
  
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    localStorage.setItem(name,!isChecked)
  };

  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="sr-only"
        />
        <div className={`box block h-6 w-10 rounded-full ${isChecked ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
        <div className={`absolute left-1.5 top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-white transition-transform ${isChecked ? 'translate-x-full ' : ''}`}></div>
      </div>
    </label>
  );
};

export default ToggleButton;
