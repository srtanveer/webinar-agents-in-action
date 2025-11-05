import React from 'react';

const Slide = ({ children, className = '', bgColor = 'bg-gray-900' }) => {
  return (
    <div className={`w-screen h-screen flex items-center justify-center ${bgColor} ${className}`}>
      <div className="max-w-7xl px-12 text-center w-full">
        {children}
      </div>
    </div>
  );
};

export default Slide;
