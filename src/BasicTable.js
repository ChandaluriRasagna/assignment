import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function createData(name, stock, price, total_sales) {
  return { name, stock, price, total_sales };
}

const rows = [
  createData('Abstract 3D', "32 in stock", "$45.99", 20),
  createData('sarphens illustration', "32 in stock", "$45.99", 20)
];

export default function BasicTable() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}> {/*spanned across 2 cells for layout*/}
                <h2>Product Sell</h2>
              </TableCell>
              <TableCell align="right">
                <TextField label="Search" variant="outlined" />
              </TableCell>
              <TableCell align="right">
                <Select
                  defaultValue={10}
                  variant="outlined"
                  style={{ minWidth: '50px' }}
                >
                  <MenuItem value={10}>Last 30 days</MenuItem>
                  <MenuItem value={20}>Last 15 days</MenuItem>
                  <MenuItem value={30}>Last 5 days</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Total Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.stock}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.total_sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
