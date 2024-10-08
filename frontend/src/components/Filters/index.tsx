import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFilter } from '../../store/patientsSlice';

const Filters: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.patients.filters);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ ...filters, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex space-x-4">
      <input
        type="text"
        name="name"
        value={filters.name}
        onChange={handleChange}
        placeholder="Filter by Name"
        className="p-2 border rounded"
      />
      <input
        type="number"
        name="age"
        value={filters.age}
        onChange={handleChange}
        placeholder="Filter by Age"
        className="p-2 border rounded"
      />
    </div>
  );
};

export default React.memo(Filters);
