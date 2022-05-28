import React, { useState } from "react";
import { CsvButton } from "../atoms/CsvButton";
import { Table } from "../organisms/Table";
import styled from "styled-components";
import { Search } from "../molecules/Search";
import books from "../../img/books.png";
import logo from "../../img/logo.png";

export const MainPage = () => {
  const [isbn, setIsbn] = useState("");
  const [data, setData] = useState([]);

  return (
    <>
      <BackGroundImg src={books} />
      <Container>
        <Logo src={logo} />
        <Search isbn={isbn} setIsbn={setIsbn} data={data} setData={setData} />
        <Table data={data} setData={setData} />
        <CsvButton data={data} />
      </Container>
    </>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  border-radius: 15px;
  margin-top: 10px;
`;

const BackGroundImg = styled.img`
  position: fixed;
  width: 100%;
  z-index: -100;
  background-size: cover;
  height: 100vh; /* 全画面表示 */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
