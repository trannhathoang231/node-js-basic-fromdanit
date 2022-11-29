import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web"

require('dotenv').config(); //dong nay de doc file dotenv -> chay file .env chua PORT=8080

const app = express()
const port = process.env.PORT || 8080; //nếu port undefiend thì có ||8080 backup

//setup view engine
configViewEngine(app);

//init web route
initWebRoute(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 