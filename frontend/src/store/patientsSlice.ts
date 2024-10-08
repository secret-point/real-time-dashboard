import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './index';
import { IPatient } from '../common/types';
import { filterPatients } from '../utils/helpers';
import { fetchInitialData } from '../utils/api';

interface IPatientsState {
  items: IPatient[];
  filteredItems: IPatient[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  filters: {
    name: string;
    age: string;
  };
}

const initialState: IPatientsState = {
  items: [],
  filteredItems: [],
  status: 'idle',
  error: null,
  filters: {
    name: '',
    age: '',
  },
};

export const fetchPatients = createAsyncThunk('patients/fetchPatients', async () => {
  const data: IPatient[] = await fetchInitialData();
  return data;
});

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    updatePatient(state, action: PayloadAction<IPatient>) {
      const index = state.items.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
        state.filteredItems = filterPatients(state.items, state.filters);
      }
    },
    setFilter(state, action: PayloadAction<IPatientsState['filters']>) {
      state.filters = action.payload;
      state.filteredItems = filterPatients(state.items, state.filters);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.filteredItems = filterPatients(action.payload, state.filters);
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch patients';
      });
  },
});

export const { updatePatient, setFilter } = patientsSlice.actions;

const selectPatientsItems = (state: RootState) => state.patients.items;

export const selectSummary = createSelector([selectPatientsItems], (patients) => {
  const total = patients.length;
  const male = patients.filter((p) => p.gender === 'Male').length;
  const female = patients.filter((p) => p.gender === 'Female').length;
  const highBP = patients.filter((p) => p.bloodPressure > 120).length;
  return { total, male, female, highBP };
});

export default patientsSlice.reducer;
