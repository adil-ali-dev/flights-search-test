import React from 'react';

const Loader = () => {
  return (
    <div className="w-full h-1 bg-gray-300 overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-green-500 animate-move"></div>
    </div>
  );
};

export default Loader;
