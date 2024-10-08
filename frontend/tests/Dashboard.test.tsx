import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../src/pages/Dashboard';
import { Provider } from 'react-redux';
import store from '../src/store';
import { QueryClient, QueryClientProvider } from 'react-query';

test('renders Dashboard component', () => {
  const queryClient = new QueryClient();
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </Provider>
  );
  const headerElement = screen.getByText(/Total Patients/i);
  expect(headerElement).toBeInTheDocument();
});
