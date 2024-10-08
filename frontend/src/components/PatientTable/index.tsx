import React, { useMemo } from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import { useAppSelector } from '../../store';
import { usePersistedState } from '../../hooks/usePersistedState';
import { IPatient } from '../../common/types';

const PatientTable: React.FC = () => {
  const patients = useAppSelector((state) => state.patients.filteredItems);
  const [columns] = usePersistedState('columns', [
    {
      Header: 'ID',
      accessor: 'id' as keyof IPatient,
    },
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

  const data = useMemo(() => patients, [patients]);
  const tableColumns = useMemo(() => columns, [columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns: tableColumns,
      data,
    },
    useFilters,
    useSortBy
  );

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="min-w-full bg-white">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={`header-${index}`}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                  className="px-1 py-2 border-b"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id} className="hover:bg-gray-100">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.column.id}
                    className="px-1 py-2 border-b text-center"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(PatientTable);
