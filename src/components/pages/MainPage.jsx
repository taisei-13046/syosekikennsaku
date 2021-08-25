import React from "react";
import { CsvButton } from "../atoms/CsvButton";
import { Search } from "../organisms/Search";
import { IsbnTable } from "../templates/IsbnTable";
import { Title } from "../templates/Title";

export const MainPage = () => {
	return (
		<>
			<Title />
			<Search />
			<IsbnTable />
			<CsvButton />
		</>
	)
}
