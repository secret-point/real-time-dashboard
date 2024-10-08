import { configureStore } from '@reduxjs/toolkit';
import patientsReducer from './patientsSlice';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    patients: patientsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;
