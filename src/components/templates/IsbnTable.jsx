import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

const columns = [
  { field: 'name', headerName: 'Name', width: 180 },
  { field: 'age', headerName: 'Age', type: 'number', width: 140 },
  { field: 'birthday', headerName: 'Birthday', type: 'date', width: 180 },
  { field: 'isAdmin', headerName: 'Is admin?', type: 'boolean', width: 180 },
];

const data = [
  { id: 1, name: '1st', age:10 , birthday: '2020-01-01', isAdmin: false },
  { id: 2, name: '2nd', age:20 , birthday: '2020-02-02', isAdmin: true },
  { id: 3, name: '3rd', age:30 , birthday: '2020-03-03', isAdmin: false },
];

export const IsbnTable = () => {
	const [rows, setRows] = React.useState(data);
  let selRows = React.useRef([]);

  // 行の削除
  const delRows = () => {
    if(selRows.current.length == 0) return;
    const newRows = rows.filter(v => selRows.current.indexOf(v.id) == -1); /* チェックの入ったid(行)を除外する */
    setRows(newRows);
  }

  return (
    <div style={{ width: '800px' }}>
      <Box component='div' sx={{ p: 2, textAlign: 'right' }}>
        <Button variant="contained" color='warning' onClick={delRows}>削除</Button>
      </Box>
      <DataGrid
        columns={columns}
        rows={rows}
        autoHeight
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(v) => selRows.current = v} /* チェックが入った行をselRowsに入れる(配列) */
      />
    </div>
  );
}
