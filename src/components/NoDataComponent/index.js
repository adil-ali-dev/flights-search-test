import React from 'react';

const NoDataFound = () => {
  return (
    <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="text-center">
        <svg
          className="w-12 h-12 text-gray-400 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <p className="mt-4 text-lg text-gray-600 font-semibold">No Data Found</p>
        <p className="mt-2 text-sm text-gray-500">It seems like there's no information available at the moment.</p>
      </div>
    </div>
  );
};

export default NoDataFound;
