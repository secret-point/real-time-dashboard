import { IPatient } from "../common/types";

export const filterPatients = (patients: IPatient[], filters: any): IPatient[] => {
  return patients.filter((patient) => {
    const matchesName = patient.name.toLowerCase().includes(filters.name.toLowerCase());
    const matchesAge = filters.age ? patient.age === Number(filters.age) : true;
    return matchesName && matchesAge;
  });
};
