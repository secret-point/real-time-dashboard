import { initializePatients, getPatients, updateRandomPatient } from './data';
import { IPatient } from './types/Patient';

// Initialize patients on server start
initializePatients();

// Fetch initial patients
export const getInitialPatients = async (): Promise<IPatient[]> => {
  return getPatients();
};

// Update patient data
export const updatePatientData = (): IPatient | null => {
  return updateRandomPatient();
};
