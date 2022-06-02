'use strict'

const express = require("express");
const { body, validationResult } = require("express-validator");
const cloudinary = require("cloudinary").v2;
const util = require("util");
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);
const router = express.Router();
const modShirt = require("../models/modShirt")

router.get("/", (req, res) => {
    res.render("agregador");
});

const validationRules = [
    body("equipo", "Falta el nombre del equipo").exists().isLength({ min:2}),
    body("temporada", "Falta la temporada de la camiseta").exists().isLength({ min:2}),
    body("marca", "Falta la marca de la camiseta").exists().isLength({ min:2}),
    body("precio", "Falta el precio o introdujo un valor inválido. Debe ingresar solo números").exists(). isNumeric(),
]

router.post("/", validationRules, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const formData = req.body;
        const arrWarning = errors.array();
        res.render("agregador", { formData, arrWarning});
    } else{
        if(!req.files){
            const messageImg = "Falta la imagen"
            res.render("agregador", {messageImg})
        }else{
    let imgFile = req.files.image;
    const img_id = (await uploader(imgFile.tempFilePath)).public_id;

    await modShirt.addShirt({...req.body, img: img_id});
    res.redirect("/stock");
    }}
});

router.get("/handleEdit/:id", async (req, res) => {
    const row = await modShirt.getShirt(req.params.id)
    const product = {
        id: row[0].id,
        equipo: row[0].equipo,
        temporada: row[0].temporada,
        marca: row[0].marca,
        precio: row[0].precio,
        img: row[0].img,
    };
    res.render("editor", {product});
});

router.post("/handleEdit/editProduct", async (req, res) => 
{

    let img_id = null;

    console.log("B");
    if(!req.files)
    {
        console.log("C");
        img_id = req.body.prevImage;
    }
    else
    {
        console.log("D");
        const row = await modShirt.getShirt(req.body.id);
        await destroy(row[0].img);
        let imageFile = req.files.imageFile;
        img_id = (await uploader(imageFile.tempFilePath)).public_id;
    }
    const data = 
    {
        id: req.body.id,
        equipo: req.body.equipo,
        temporada: req.body.temporada,
        marca: req.body.marca,
        precio: req.body.precio,
        img: img_id,
    }
    console.log("E");
    await modShirt.modifyShirt(data, data.id);
    res.redirect("/stock");
    
});

router.get("/handleEdit/deleteProduct/:id", async (req, res) => {
    const row = await modShirt.getShirt(req.params.id);
    await destroy(row[0].img);
    await modShirt.deleteShirt(req.params.id);
    res.redirect("/stock");
});


module.exports = router; 