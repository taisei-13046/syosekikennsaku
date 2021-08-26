import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { CSVLink, CSVDownload } from "react-csv";

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
	  },
	},
	button: {
		backgroundColor: "white",
		marginTop: "30px",
		marginBottom: "30px",
		height: "50px",
		width: "200px",
		fontWeight: "bold",
		fontSize: "15px",
	}
  }));

const headers = [
	{ label: "書籍名", key: "title" },
	{ label: "著者名", key: "author" },
	{ label: "出版社", key: "publisher" },
	{ label: "isbn", key: "isbn" },
	{ label: "値段", key: "price" },
];

export const CsvButton = (props) => {
	const {data} = props;
	const classes = useStyles();

	return (
			<div className={classes.root}>
				<CSVLink data={data} headers={headers}>
					<Button variant="outlined" className={classes.button} >CSV化する</Button>
				</CSVLink>
			</div>
	)
}
