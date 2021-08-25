import React, { useState } from "react";
import { CsvButton } from "../atoms/CsvButton";
import { IsbnTable } from "../templates/IsbnTable";
import { Title } from "../templates/Title";
import styled from "styled-components";
import { Search } from "../molecules/Search";


export const MainPage = () => {
	const [isbn, setIsbn] = useState('');
	const [data, setData] = useState([]);
	return (
		<>
			<Sdiv>
				<Title />
				<Search isbn={isbn} setIsbn={setIsbn} data={data} setData={setData} />
				<IsbnTable data={data} setData={setData} />
				<CsvButton />
			</Sdiv>
		</>
	)
}

const Sdiv = styled.div`
text-align:center;
`
