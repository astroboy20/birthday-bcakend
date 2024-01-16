const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const {connectDB} = require("./src/db/conn");
const router = require("./src/routes/celebrants")
app.use(cors());
app.use(bodyparser.json())

connectDB();
app.use(router);
app.listen(process.env.PORT || 8000)