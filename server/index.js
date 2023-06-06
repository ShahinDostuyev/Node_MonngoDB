const express = require('express');
const { db } = require('./config/db');
const { BookRoutes } = require('./routes/BookRoutes');
const { WriterRoutes } = require('./routes/WriterRoutes');
const { CountryRoutes } = require('./routes/CountryRoutes');
const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
require('dotenv').config()

db.connect();
app.use(express.json())

app.use('/api/books', BookRoutes)
app.use('/api/writers', WriterRoutes)
app.use('/api/countries', CountryRoutes)



app.listen(3000);