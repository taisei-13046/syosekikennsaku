import React, { useState } from "react";
import { CsvButton } from "../atoms/CsvButton";
import { IsbnTable } from "../templates/IsbnTable";
import { Title } from "../templates/Title";
import styled from "styled-components";
import { Search } from "../molecules/Search";
import books from '../../img/books.png'


export const MainPage = () => {
	const [isbn, setIsbn] = useState('');
	const [data, setData] = useState([]);
	return (
		<>
			<Simg src={books} />
				<Sdiv>
					<Title />
					<Search isbn={isbn} setIsbn={setIsbn} data={data} setData={setData} />
					<IsbnTable data={data} setData={setData} />
					<CsvButton data={data} />
				</Sdiv>
		</>
	)
}

const Sdiv = styled.div`
	text-align:center;
`
const Simg = styled.img`
	position: fixed;
	width: 100%;
	z-index: -100;
	background-size: cover;
	height: 100vh; /* 全画面表示 */
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
`
