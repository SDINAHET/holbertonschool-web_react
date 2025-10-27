import React from 'react';
import WithLogging from '../HOC/WithLogging';

function Login() {
  return (
    <div className="App-body border-t-[3px] border-[var(--main-color)] p-2">
      <p className="mb-2">Login to access the full dashboard</p>

      {/* inline row, matching the screenshots */}
      <div className="inline-flex items-center flex-wrap gap-2">
        <label htmlFor="email" className="ml-4 mr-2">Email</label>
        <input
          id="email"
          type="email"
          className="border border-gray-300 px-2 py-1 mr-2 rounded"
        />

        <label htmlFor="password" className="ml-4 mr-2">Password</label>
        <input
          id="password"
          type="password"
          className="border border-gray-300 px-2 py-1 mr-2 rounded"
        />

        <button className="px-3 py-1 border rounded hover:bg-gray-50">
          OK
        </button>
      </div>
    </div>
  );
}

export default WithLogging(Login);
