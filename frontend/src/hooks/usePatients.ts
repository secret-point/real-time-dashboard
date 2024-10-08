import axios from 'axios';
import { useQuery } from 'react-query';

export interface IPatient {
  id: number;
  name: string;
  age: number;
  room: string;
  bloodPressure: string;
  heartRate: number;
  oxygenLevel: number;
  gender: 'male' | 'female';
}

const fetchPatients = async (): Promise<IPatient[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data.map((user: any) => ({
    id: user.id,
    name: user.name,
    age: Math.floor(Math.random() * 60) + 20,
    room: `Room ${Math.floor(Math.random() * 100)}`,
    bloodPressure: '120/80',
    heartRate: 70,
    oxygenLevel: 98,
    gender: Math.random() > 0.5 ? 'male' : 'female',
  }));
};

export const usePatients = () => {
  return useQuery('patients', fetchPatients);
};
