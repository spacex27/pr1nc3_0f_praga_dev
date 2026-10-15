let express = require("express");

require('dotenv').config();
require('./database');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})