import React from 'react';

export default function SearchByCompany() {
  return (
    <div className="container my-12">
      <div>
        <h1 className="font-roboto capitalize text-2xl font-semibold tracking-wide text-blue-700 mb-5">
          Top companies hiring
        </h1>
      </div>
      <div>
        {/* company card */}
        <div className="flex flex-col items-center justify-between w-48 h-48 border border-solid border-gray-200 rounded-2xl text-center p-3 shadow-md">
          <span className="block font-semibold">Accenture</span>
          <div>
            <span className="block text-xs mb-4">
              Accenture is hiring Service Delivery Ops Analyst
            </span>
            <button className="text-sm px-4 py-2 bg-sky-100 rounded-2xl text-blue-700 font-semibold">
              View Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
