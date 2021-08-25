import React, {useState} from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "20ch",
    },
  },
}));

export const Search = (props) => {
  const { isbn, setIsbn, data, setData } = props;
  const [id, setId] = useState(1);
  const classes = useStyles();

  const onClickButton = () => {
	// -　があるISBNコードでも対応する
	const replacedIsbn = isbn.replace('-', '')
	// 楽天書籍検索API
    axios.get(`https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&isbn=${replacedIsbn}&applicationId=1000015805478906388`)
	.then((res) => {
		const bookData = res.data.Items[0].Item;
		setId(id+1)
		setData([
			...data,
			{
				id: id,
				title: bookData.title,
				author: bookData.author,
				publisher: bookData.publisherName,
				isbn: bookData.isbn,
				price: bookData.itemPrice
			},
		])
	})
	.catch((error) => {
		console.log(error)
	});
  };

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="isbnコード"
          variant="outlined"
          onChange={(e) => setIsbn(e.target.value)}
        />
      </form>
      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={onClickButton}>
          追加
        </Button>
      </div>
    </>
  );
};
