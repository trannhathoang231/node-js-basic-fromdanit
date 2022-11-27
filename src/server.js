import express from "express";
import configViewEngine from "./configs/viewEngine";
require('dotenv').config(); //dong nay de doc file dotenv -> chay file env chua PORT=8080

const app = express()
const port = process.env.PORT || 8080; //nếu port undefiend thì có 8080 backup

configViewEngine(app);

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})