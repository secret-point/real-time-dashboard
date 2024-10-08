import axios from "axios";
import { IPatient } from "./types/Patient";

let patients: IPatient[] = [];

export const initializePatients = async () => {
  const response = await axios.get<IPatient[]>('https://jsonplaceholder.typicode.com/posts');
    patients = response.data.map((item) => ({
      id: item.id,
      name: `Patient ${item.id}`,
      age: Math.floor(Math.random() * 60) + 20,
      room: `Room ${Math.floor(Math.random() * 100)}`,
      bloodPressure: Math.floor(Math.random() * 40) + 80,
      heartRate: Math.floor(Math.random() * 40) + 60,
      oxygenLevel: Math.floor(Math.random() * 20) + 90,
      gender: Math.random() > 0.5 ? 'Male' : 'Female',
    }));
};

export const getPatients = (): IPatient[] => {
  return patients;
};

export const updateRandomPatient = (): IPatient | null => {
  if (patients.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * patients.length);
  const patient = patients[randomIndex];
  patient.bloodPressure = Math.max(60, Math.min(180, patient.bloodPressure + (Math.random() * 10 - 5)));
  patient.heartRate = Math.max(40, Math.min(120, patient.heartRate + (Math.random() * 10 - 5)));
  patient.oxygenLevel = Math.max(70, Math.min(100, patient.oxygenLevel + (Math.random() * 10 - 5)));
  return { ...patient };
};
