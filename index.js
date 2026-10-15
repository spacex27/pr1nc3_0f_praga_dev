let express = require("express");

require('dotenv').config();
require('./database');

let app = express();
const graczeController = require("./graczeController");
const przeciwnicyController = require("./przeciwnicyController");
const przedmiotyController = require("./przedmiotyController");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api", graczeController);
app.use("/api", przeciwnicyController);
app.use("/api", przedmiotyController);

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})