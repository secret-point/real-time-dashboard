// frontend/src/App.tsx
import React from 'react';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Real-Time Patient Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default App;
