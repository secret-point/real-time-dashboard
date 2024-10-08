import { usePersistedState } from "../hooks/usePersistedState";
import { IPatient } from "./types";

export const PATIENT_TABLE_COLUMNS = usePersistedState('columns', [
  {
    Header: 'Name',
    accessor: 'name' as keyof IPatient,
  },
  {
    Header: 'Age',
    accessor: 'age' as keyof IPatient,
  },
  {
    Header: 'Room',
    accessor: 'room' as keyof IPatient,
  },
  {
    Header: 'Blood Pressure',
    accessor: 'bloodPressure' as keyof IPatient,
  },
  {
    Header: 'Heart Rate',
    accessor: 'heartRate' as keyof IPatient,
  },
  {
    Header: 'Oxygen Level',
    accessor: 'oxygenLevel' as keyof IPatient,
  },
]);