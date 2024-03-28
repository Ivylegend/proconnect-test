import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button"; // Import Button component from Material-UI
import Avatar from "@mui/material/Avatar"; // Import Avatar component from Material-UI

const columns = [
  { id: "serial", label: "Serial Number", minWidth: 100 },
  { id: "name", label: "Student Name", minWidth: 100 },
  { id: "institution", label: "Institution", minWidth: 170, align: "center" },
  { id: "course", label: "Course", minWidth: 170, align: "right" },
  { id: "date", label: "Date", minWidth: 100, align: "right" },
  { id: "action", label: "Action", minWidth: 100, align: "center" }, // Keep the action column
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
    "Victory Blessing",
    "Covenant University",
    "Computer Science",
    "8/10/24",
    "View Details"
  ),
  createData(
    "3",
    "Busayo First",
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
              .map((row, rowIndex) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                    {columns.map((column, colIndex) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "name" ? ( // Render avatar and text for the name column
                            <div className="flex items-center">
                              <Avatar
                                sx={{ mr: 1 }}
                                alt={value}
                                src="/path/to/image.jpg"
                              />
                              {value}
                            </div>
                          ) : column.id === "action" ? ( // Render buttons for the action column
                            <Button
                              variant="secondary"
                              sx={{ bgcolor: "#db251a1a", color:"#db251a", textTransform:"capitalize" }} // Set the background color to red
                              onClick={() => console.log("Button clicked")}
                            >
                              {value}
                            </Button>
                          ) : (
                            // Render plain text for other columns
                            value
                          )}
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
