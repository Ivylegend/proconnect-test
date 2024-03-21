import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "serial", label: "Serial Number", minWidth: 100 },
  { id: "name", label: "Student Name", minWidth: 100 },
  {
    id: "institution",
    label: "Institution",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "course",
    label: "Course",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 100,
    align: "right",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
];

function createData(serial, name, institution, course, date, action) {
  return { serial, name, institution, course, date, action };
}

const rows = [
  createData(
    "1",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "2",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "3",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "4",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "5",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "6",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "7",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "8",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "9",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "10",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "11",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "12",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "13",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "14",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "15",
    "David Johnson",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
];

export default function TableLayout() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 15, 20, 25, 30, 40, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
