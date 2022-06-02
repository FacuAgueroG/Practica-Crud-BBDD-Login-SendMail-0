'use strict'

const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
    res.render("contacto");
});

router.post("/",  async (req,res) =>{

    const emailMsg = {
            to: "facuaguerog@gmail.com",
            from: req.body.email,
            subject: "Mensaje de usuario",
            html: `El usuario ${req.body.name}
            nos envió esto: ${req.body.message}`
        };    
    
    const transport = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT,
        auth: {
        user: process.env.USER,
        pass: process.env.PASS,
        }
        });
    
    let sendMailStatus = await transport.sendMail(emailMsg); 
    
    res.redirect("/");
});

module.exports = router;