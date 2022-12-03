const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require(mongoose);
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(3000);

