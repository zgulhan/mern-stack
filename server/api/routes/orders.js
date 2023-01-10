const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "GET request for /orders"
    });
});

router.post("/", (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }

    res.status(201).json({
        message: "POST request for /orders",
        order: order
    });
});

router.get("/:orderId", (req, res, next) => {
    const orderId = req.params.orderId;
    res.status(200).json({
        message: `GET request for ${orderId}`
    });
});

router.post("/:orderId", (req, res, next) => {
    const orderId = req.params.orderId;
    res.status(201).json({
        message: `POST  request for ${orderId}`
    });
});

module.exports = router;