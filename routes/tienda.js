'use strict'

const express = require("express");
const cloudinary = require("cloudinary").v2;
const router = express.Router();
const modShirt = require("../models/modShirt")

router.get("/",  async (req, res) => {
    const data = await modShirt.getShirts();
    const products = data.map((row) => {
        const imgUrl = cloudinary.url(row.img,
);
        return {...row, imgUrl}
    });
    res.render("tienda", { products });
});

module.exports = router;