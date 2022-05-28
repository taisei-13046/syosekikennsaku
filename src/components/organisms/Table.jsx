import React, { useRef } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const columns = [
  { field: "title", headerName: "書籍名", width: 180 },
  { field: "author", headerName: "著者/編集者", width: 180 },
  { field: "publisher", headerName: "出版社", width: 180 },
  { field: "isbn", headerName: "ISBN", type: "number", width: 180 },
  { field: "price", headerName: "値段", type: "number", width: 180 },
];

/**
 * テーブルコンポーネント
 */
export const Table = ({ data, setData }) => {
  const selRows = useRef([]);

  // 行の削除
  const delRows = () => {
    if (selRows.current.length === 0) return;
    const newData = data.filter((v) => selRows.current.indexOf(v.id) === -1);
    /* チェックの入ったid(行)を除外する */
    setData(newData);
  };

  return (
    <Container>
      <Box component="div" sx={{ p: 2, textAlign: "right" }}>
        <Button variant="contained" color="warning" onClick={delRows}>
          削除
        </Button>
      </Box>
      <DataGrid
        columns={columns}
        rows={data}
        autoHeight
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(value) => (selRows.current = value)}
        /* チェックが入った行をselRowsに入れる(配列) */
        style={{ backgroundColor: "white" }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
