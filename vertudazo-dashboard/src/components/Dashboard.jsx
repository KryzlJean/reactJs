import React from 'react';

const Dashboard = () => {
  return (
    <main className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Dashboard</h2>
      <div className="container mx-auto">
        <div className="overflow-hidden bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold py-4 px-6 bg-blue-500 text-white rounded-t-lg">Sample Table</h1>
          <table className="min-w-full">
            <thead>
              <tr className="bg-blue-200">
                <th className="px-6 py-3 border-b border-blue-300 text-left text-sm font-semibold text-blue-600 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 border-b border-blue-300 text-left text-sm font-semibold text-blue-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 border-b border-blue-300 text-left text-sm font-semibold text-blue-600 uppercase tracking-wider">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-100">
                <td className="px-6 py-4 border-b border-blue-300">1</td>
                <td className="px-6 py-4 border-b border-blue-300">John Doe</td>
                <td className="px-6 py-4 border-b border-blue-300">john.doe@example.com</td>
              </tr>
              <tr className="bg-blue-100">
                <td className="px-6 py-4 border-b border-blue-300">2</td>
                <td className="px-6 py-4 border-b border-blue-300">Jane Smith</td>
                <td className="px-6 py-4 border-b border-blue-300">jane.smith@example.com</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
