const express = require('express');
const mongoose = require('mongoose');
const {join} = require('path');
require('dotenv').config({path: join(process.cwd(), '.env')})

const {config} = require("./constants");
const {booksRouter} = require("./routes");

mongoose.connect(config.URL_DB);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/books', booksRouter);

app.use('*', (req, res) => {
    res.status(404).json('Router not found');
})

app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            error: err.message || 'Unknown Error',
            code: err.status || 500,
        })
})

app.listen(config.SERVER_PORT, () => {
    console.log(`Server started port ${process.env.SERVER_PORT}`);
})