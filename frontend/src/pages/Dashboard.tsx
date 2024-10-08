import React, { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { fetchPatients, updatePatient } from '../store/patientsSlice';
import { useWebSocket } from '../hooks/useWebSocket';
import Filters from '../components/Filters';
import Summary from '../components/Summary';
import PatientTable from '../components/PatientTable';


const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  const handleMessage = (data: any) => {
    dispatch(updatePatient(data));
  };

  useWebSocket('ws://localhost:4000/ws', handleMessage);

  return (
    <div className="flex flex-col space-y-4">
      <Filters />
      <Summary />
      <PatientTable />
    </div>
  );

}
export default Dashboard