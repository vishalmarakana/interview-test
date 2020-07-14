import React from "react";
import { useTable, useSortBy, usePagination } from 'react-table'
import Pagination from "./pagination";
import TableHeader from "./table-header";
import TableBody from "./table-body";
const ShipmentSheet = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  )

  return (
    <>
      <table {...getTableProps()}>
        <TableHeader headerGroups={headerGroups} />
        <TableBody getTableBodyProps={getTableBodyProps} prepareRow={prepareRow} page={page} />
      </table>
      <Pagination canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageOptions={pageOptions}
            pageCount={pageCount}
            gotoPage={gotoPage}
            nextPage={nextPage}
            previousPage={previousPage}
            setPageSize={setPageSize}
            pageIndex={pageIndex}
            pageSize = {pageSize}
    />

    </>
  )
}

export default ShipmentSheet;