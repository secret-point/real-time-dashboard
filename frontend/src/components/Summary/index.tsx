import React from 'react';
import { useAppSelector } from '../../store';
import { selectSummary } from '../../store/patientsSlice';

const Summary: React.FC = () => {
  const summary = useAppSelector(selectSummary);

  return (
    <div className="flex space-x-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold">Total Patients</h2>
        <p className="text-xl">{summary.total}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold">Male</h2>
        <p className="text-xl">{summary.male}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold">Female</h2>
        <p className="text-xl">{summary.female}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold">High Blood Pressure</h2>
        <p className="text-xl">{summary.highBP}</p>
      </div>
    </div>
  );
};

export default React.memo(Summary);
