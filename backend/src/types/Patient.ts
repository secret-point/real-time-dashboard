export interface IPatient {
    id: number;
    name: string;
    age: number;
    room: string;
    bloodPressure: number;
    heartRate: number;
    oxygenLevel: number;
    gender: 'Male' | 'Female';
  }
  