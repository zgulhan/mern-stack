const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("../server/api/routes/products");
const orderRoutes = require("../server/api/routes/orders");

mongoose.set('strictQuery', false);

mongoose.connect("***");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status = err.status || 500;
    res.json({
        message: err.message
    })
});

module.exports = app;