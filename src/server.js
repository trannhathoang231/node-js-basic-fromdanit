import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initAPIRoute from './route/api';
const bodyParser  = require('body-parser');
// import connection from "./configs/connectDB";

require("dotenv").config(); //dong nay de doc file dotenv -> chay file .env chua PORT=3000

const app = express();
const port = process.env.PORT || 3000; //nếu port undefiend thì có ||3000 backup

//Cấu hình Express gửi POST request:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);

// init api route
initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
