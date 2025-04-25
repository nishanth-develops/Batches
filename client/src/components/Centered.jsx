import React from 'react';

export default function Centered({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 rounded-lg shadow-md bg-white">
        {children}
      </div>
    </div>
  );
}
